// button is attaced to pin 17, led to 18
var GPIO = require('onoff').Gpio,
    led = new GPIO(77, 'out');

 
function ledOn() {
led.writeSync(1);
};

ledOn();

