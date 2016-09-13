var GpioStream = require('gpio-stream'),
    button = GpioStream.writable(77);

// pipe the button presses to stdout
button.pipe(process.stdout);
