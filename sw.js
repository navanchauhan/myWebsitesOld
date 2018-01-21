importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {

e.waitUntil(

caches.open('navanchauhan').then(function(cache) {

return cache.addAll([

'/',

'/index.html',

'/Contact.html',

'/css/*',

'/js/*',

'/404.html',

'/*.png'

]);

})

);

});
