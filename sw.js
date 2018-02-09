importScripts('cache-polyfill.js');

self.addEventListener('install', function(e) {

e.waitUntil(

caches.open('Navan Chauhan').then(function(cache) {

return cache.addAll([

'/',

'/index.html',

'/Contact.html',


'/404.html',


]);

})

);

});

