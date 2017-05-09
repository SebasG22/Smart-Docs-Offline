module.exports = {
    "sendNotification": function (title,body) {
        Notification.requestPermission(function (result) {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(function (registration) {
                    registration.showNotification(title, {
                        body: body,
                        icon: '/img/huaweiLogo.png',
                        vibrate: [200, 100, 200, 100, 200, 100, 200],
                        tag: 'Smart Docs Offline'
                    });
                });
            }
        });
    }
}