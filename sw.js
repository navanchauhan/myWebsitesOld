importScripts('cache-polyfill.js');

self.addEventListener('install', function(e) {

e.waitUntil(

caches.open('Navan Chauhan').then(function(cache) {

return cache.addAll([

'/css/menu.css',
  
  '/js/menu.js',
  'css/style.css',
  'css/timeline.css',
  '/js/timeline.js',

'/index.html',

'/Contact.html',
'/projects.html',

'/404.html'


]);

.then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
