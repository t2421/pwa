// ServiceWorker処理：https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja

// キャッシュ名とキャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches2';
var urlsToCache = [
    '/styles/inline.css'
];

// インストール処理
self.addEventListener('install', function(event) {
    console.log("install",event);
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    console.log(event.request.url)
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});

self.addEventListener('activating', function(event) {
    console.log('activating',event)
   
});

self.addEventListener('activated', function(event) {
    console.log('activated',event)
   
});

self.addEventListener('redundant', function(event) {
    console.log('redundant',event)
   
});