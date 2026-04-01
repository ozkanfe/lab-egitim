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
