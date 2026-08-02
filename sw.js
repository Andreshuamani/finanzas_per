// ─── Service Worker — Mis Finanzas PWA ───
// Cambia el número de versión para forzar actualización del caché
const CACHE = 'finanzas-v1'
const FILES = ['./index.html', './manifest.json', './icon.svg']

// Instalar: guardar archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  )
  self.skipWaiting()
})

// Activar: limpiar cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch: caché primero, luego red
self.addEventListener('fetch', e => {
  // No interceptar llamadas a la API de Claude
  if (e.request.url.includes('anthropic.com')) return

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached
      return fetch(e.request).then(resp => {
        // Guardar en caché si es exitosa
        if (resp.ok) {
          const clone = resp.clone()
          caches.open(CACHE).then(c => c.put(e.request, clone))
        }
        return resp
      }).catch(() => cached)
    })
  )
})
