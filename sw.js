const CACHE = 'presenze-v11';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Installazione tollerante: un file mancante non blocca più l'aggiornamento
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ASSETS.map(a => c.add(new Request(a, { cache: 'reload' })).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Scarica sempre la versione più recente dal sito (ignorando la cache del browser)
async function fresh(req) {
  const r = await fetch(req.mode === 'navigate' ? req.url : req, { cache: 'no-cache' });
  if (r.redirected) {
    const b = await r.blob();
    return new Response(b, { status: r.status, statusText: r.statusText, headers: r.headers });
  }
  return r;
}

// Online: versione più recente (e la salva). Offline: usa la copia salvata.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fresh(e.request)
      .then(r => {
        if (r && r.ok && new URL(e.request.url).origin === location.origin) {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});
