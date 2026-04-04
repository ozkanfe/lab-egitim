const CACHE_NAME = 'lab-egitim-v2'; // Versiyon artırıldı

self.addEventListener('install', event => {
    // Kurulum adımını atla ve yeni PWA'yı direkt devreye sok
    self.skipWaiting(); 
});

self.addEventListener('activate', event => {
    // Eski önbellekleri(cache) temizle
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Geliştirme sürecinde olduğumuz için her zaman en güncel halini (AĞDAN/NETWORK) çekmeye zorlayalım.
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

// Arkaplan Bildirim Desteği (Web Push API)
self.addEventListener('push', event => {
    let data = { title: 'Yeni Mesaj!', body: 'Patoloji Eğitim Programı ile ilgili yeni bir güncelleme var.' };
    
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        icon: 'https://via.placeholder.com/192x192/0ce3e3/ffffff?text=LE',
        badge: 'https://via.placeholder.com/192x192/0ce3e3/ffffff?text=LE',
        vibrate: [200, 100, 200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            { action: 'explore', title: 'Uygulamayı Aç' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Bildirime tıklandığında uygulamayı aç
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === '/' && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});
