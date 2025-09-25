const CACHE_NAME = "chitra-sell-cache-v1";
const urlsToCache = [
  "/Fashion WebSite.html",
  "/manifest.json",
  "https://cdn.tailwindcss.com",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap",
  "https://fonts.gstatic.com",
  "https://placehold.co/192x192/2563EB/ffffff?text=CS",
  "https://placehold.co/512x512/2563EB/ffffff?text=CS",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
