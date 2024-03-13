// sw.js (Service Worker)

// Paso 1: Registro del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    self.registration.showNotification("Probando notificaciones",{body : "funca"})
  );
});


// Paso 3: Elimina cachés antiguos
self.addEventListener('activate', (event) => {
});



self.addEventListener('push', (event) => {
  const {title, message} = event.data.json();
  event.waitUntil(
    self.registration.showNotification(title,{body : message})
  );
});
