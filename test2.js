// export GPIO 18 as an output.
var GPIO = require('onoff').Gpio,
    led = new GPIO(77, 'out');
 
// start a timer that runs the callback
// function every second (1000 ms)
setInterval(function() {  
  // get the current state of the LED
  var state = led.readSync();
  // write the opposite of the current state to the LED pin
  led.writeSync(Number(!state));
}, 1000);
