importScripts('cache-polyfill.js');

self.addEventListener('install', function(e) {

e.waitUntil(

caches.open('Navan Chauhan').then(function(cache) {

return cache.addAll([

'/css/menu.css',
  '/',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css',
  'https://www.w3schools.com/lib/w3.js',
  '/js/jquery.min.js',
  '/css/404.css',
  '/js/menu.js',
  'css/style.css',
  'css/timeline.css',
  '/js/timeline.js',

'/index.html',
'/css/contact.css',
  
'/Contact.html',
'/projects.html',

'/404.html'


]);
})

);

});
self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
