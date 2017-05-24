module.exports = {
    "sendNotification": function (title, body) {
        Notification.requestPermission(function (result) {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(function (registration) {
                    registration.showNotification(title, {
                        image: '/img/huaweiLogo-192x192.png',
                        body: body,
                        icon: '/img/huaweiLogo-192x192.png',
                        vibrate: [200, 300, 200, 300, 200, 300, 200],
                        tag: 'Smart Docs Offline',
                        "actions": [
                            { "action": "yes", "title": "Yes"},
                            { "action": "no", "title": "No"}
                        ]
                    });
                });
            }
        });
    }
}