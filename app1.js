var sockets = require('websocket.io'),httpServer = sockets.listen(4000);

httpServer.on('onConnection', function (socket) {

console.log('connected……');

httpServer.send('Web socket connected.');

httpServer.on('message', function (data) {

console.log('message received:', data);

});

httpServer.on('close', function () {

console.log('socket closed!');

});

});