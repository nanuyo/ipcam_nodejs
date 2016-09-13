var GPIO = require('onoff').Gpio,
    led = new GPIO(77, 'out');

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')


var counter;

app.listen(8124);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    counter = 1;
    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  //socket.emit('news', { news: 'world' });
//  socket.on('echo', function (data) {

// start a timer that runs the callback
// function every second (1000 ms)
setInterval(function() {  
  // get the current state of the LED
  var state = led.readSync();
if(Number(state) == 1)
       socket.emit('news', {news: 'LED: ON'}); 
else
       socket.emit('news', {news: 'LED: OFF'}); 

  // write the opposite of the current state to the LED pin
  led.writeSync(Number(!state));


}, 1000);

  //});
});



