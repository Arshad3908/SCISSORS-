const cacheName = "v1";

const cacheFiles = [
    "/",
    "/index.html",
    "/login.html",
    "/sign_up.html"
];

self.addEventListener("install", function(event) {
    event.waitUntil(caches.open(cacheName)).then((cache) => {
        return cache.addAll(cacheFiles)
    })
})

self.addEventListener("activate", function(event) {
    event.waitUntil(caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((thisCacheName) => {
            if (thisCacheName !== cacheName) {
                return caches.delete(thisCacheName)
            }
        }))
    }))
})