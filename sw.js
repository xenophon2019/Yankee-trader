// Yankee Trader service worker: caches the game so it runs offline.
// Bump VERSION whenever you change any file below, so phones pick up the new copy.
const VERSION = 'yt-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './fonts/vt323.woff2',
  './fonts/silkscreen-700.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  // The page itself: try the network first so updates arrive, fall back to the cached copy offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Fonts and icons: cache first.
  event.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
