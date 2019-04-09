function enterPassword() {

}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        window.open = cordova.InAppBrowser.open;
        var ref = cordova.InAppBrowser.open('https://wix.getmeido.com/', '_blank', 'location=no');
        window.ref = ref;
        ref.addEventListener('loadstop', function() {
            ref.executeScript({
                code: `(${function() {
                    const inputs = document.querySelectorAll('input');
                    if (inputs.length === 2) {
                    	inputs[0].value = 'wix_andrii_tsarenko';
                        inputs[1].value = 'nxpd036gxla';
                    }
                }.toString()})()`
            });
        });

        cordova.plugins.notification.local.schedule({
            title: 'Order food!',
            text: 'Really, order food dude!',
            foreground: true,
            trigger: {
                every: {
                    weekdayOrdinal: 5,
                    hour: 11,
                 },
                 count: 1
             }
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();