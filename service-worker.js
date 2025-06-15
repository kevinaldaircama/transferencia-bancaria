const CACHE_NAME = 'trans-cache-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
  '/Interbank pago.html'
  '/RTB.html'
  '/Yape fake.html'
  '/bcp pago.html'
  '/bienvenido.html'
  '/billetera.html'
  '/depósito.html'
  '/cuentastreaming.html'
  '/bonus.html'
  '/bloqueo.html'
  '/desbloqueo.html'
  '/diamantes.html'
  '/fake.html'
  '/liberación.html'
  '/login.html'
  '/loginvip.html'
  '/menu.html'
  '/pagos.html'
  '/perfil.html'
  '/recarga.html'
  '/registrarvip.html'
  '/registro.html'
  '/sistema.html'
  '/tunbarwha.html'
  '/yape pago.html'
  '/transaccionesvip.html'
  '/transacciones.html'
];

// Instala y guarda en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Habilita inmediatamente
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Responde con caché o red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
