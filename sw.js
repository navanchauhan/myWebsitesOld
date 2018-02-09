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
