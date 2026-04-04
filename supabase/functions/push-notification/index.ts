import { serve } from "https://deno.land/std@0.177.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import webpush from "https://esm.sh/web-push@3.6.4"

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? ''
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

// VAPID Anahtarları (Bu anahtarlar push servisinin kimliğini doğrular)
// NOT: Gerçek bir projede bunları Environment Variable olarak saklamalısınız.
const VAPID_KEYS = {
    publicKey: 'BAnU04YmXvX7Y2Z0Z1X2Y3Z4X5Y6Z7X8Y9Z0X1Y2Z3X4Y5Z6X7Y8Z9X0Y1Z2',
    privateKey: 'X1Y2Z3X4Y5Z6X7Y8Z9X0Y1Z2X3Y4Z5X6Y7Z8X9Y0Z1A=' 
}

webpush.setVapidDetails(
    'mailto:ozkan@example.com',
    VAPID_KEYS.publicKey,
    VAPID_KEYS.privateKey
)

serve(async (req) => {
    try {
        const { record } = await req.json() // Yeni eklenen mesaj verisi
        
        const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
        
        // Veritabanından adminin bildirim aboneliklerini çek
        const { data: subs, error: subError } = await supabase
            .from('push_subscriptions')
            .select('subscription_data')
            .eq('user_id', 'admin')

        if (subError || !subs) {
            return new Response(JSON.stringify({ error: 'Abonelik bulunamadı' }), { status: 404 })
        }

        // Tüm kayıtlı admin cihazlarına push gönder
        const notifications = subs.map(async (s: any) => {
            try {
                return await webpush.sendNotification(
                    s.subscription_data,
                    JSON.stringify({
                        title: 'Yeni Lab Mesajı! 🚀',
                        body: record.content
                    })
                )
            } catch (err) {
                console.error('Push gönderim hatası:', err)
            }
        })

        await Promise.all(notifications)

        return new Response(JSON.stringify({ message: 'Bildirimler gönderildi' }), { status: 200 })
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 })
    }
})
