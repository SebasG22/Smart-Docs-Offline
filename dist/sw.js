var cacheName = "app-SmartDocs-cache-v1";
var filesToCache = [
 '/',
  '/css/bootstrap.min.css',
  '/css/font-awesome.min.css',
  '/fonts/fontawesome-webfont.ttf',
  '/fonts/fontawesome-webfont.woff',
  '/fonts/fontawesome-webfont.woff2',
  '/img/completed.png',
  '/img/errorIcon.svg',
  '/img/eyeIcon.png',
  '/img/Huawei.jpg',
  '/img/huaweiLogo-192x192.png',
  '/img/huaweiLogo-badge.png',
  '/img/huaweiLogo.png',
  '/img/huaweiOffice.jpg',
  '/img/incompleted.png',
  '/img/internetIcon.svg',
  '/img/mapIcon.svg',
  '/img/visitIcon.svg',
  '/js/Chart.min',
  '/views/allReportsRelated.html',
  '/views/allTemplatesBoxes.html',
  '/views/allVisits.html',
  '/views/dashboard.html',
  '/views/index.html',
  '/views/login.html',
  '/views/myReports.html',
  '/views/myReportsLog.html',
  '/views/newReport.html',
  '/views/newTemplate.html',
  '/bundle.js'
  ];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function (event) {
    caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
            if (key !== cacheName) {
                return caches.delete(key);
            }
        }));
    });
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                console.log('Found ', event.request.url, ' in cache');
                return response;
            }
            console.log('Network request for ', event.request.url);
            return fetch(event.request)

            return caches.open(staticCacheName).then(function (cache) {
                if (event.request.url.indexOf('test') < 0) {
                    cache.put(event.request.url, response.clone());
                }
                return response;
            });

        }).catch(function (error) {

            // TODO 6 - Respond with custom offline page
        })
    );
});

self.addEventListener('sync', function(event) {
  if (event.tag == 'myFirstSync') {
    event.waitUntil(doSomeStuff());
  }
});

function doSomeStuff(){
    return new Promise(function(resolve,reject){
        if(navigator.onLine == true){
            console.log("do Some Stuff sync completed" + new Date());
            resolve();
        }
        else{
            console.log("do Some stuff waiting to start again" + new Date());
            reject();
        }
    });
}