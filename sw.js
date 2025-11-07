const CACHE_NAME = 'plan-mejora-v1';
const urlsToCache = [
  '/',
  '/PlanDeMejora/index.html',
  '/PlanDeMejora/manifest.json',
  '/PlanDeMejora/icons/icon-72x72.png',
  '/PlanDeMejora/icons/icon-192x192.png',
  '/PlanDeMejora/icons/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});