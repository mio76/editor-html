// sw.js
const CACHE_NAME = 'editor-html-cache-v1';

const urlsToCache = [
  '/editor-html/',
  '/editor-html/index.html',
  '/editor-html/icon-192.png',
  '/editor-html/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});