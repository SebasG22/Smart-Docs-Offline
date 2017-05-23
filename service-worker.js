/*
var CACHE_NAME = 'smart-docs-cache-v2';
var urlsToCache = [
    '/',
    'img/eyeIcon.png',
    'img/huaweiLogo.png',
    'img/visitIcon.svg',
    'css/bootstrap.min.css',
    'css/font-awesome.min.css',
    'fonts/fontawesome-webfont.ttf',
    'fonts/fontawesome-webfont.ttf',
    'fonts/fontawesome-webfont.woff2',
    'views/allTemplatesBoxes.html',
    'views/dashboard.html',
    'views/allVisits.html',
    'views/allReportsRelated.html',
    'views/myReports.html',
    'views/myReportsLog.html',
    'views/newReport.html',
    'views/newTemplate.html',
    'bundle.js',
    'manifest.json',
    'service-worker.js',
];

self.addEventListener('install', function (event) {
    console.log("Install Cache");
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
          console.log("Request From : " + event.request);
                  // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
*/

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://developers.google.com/web/')
  );
});
