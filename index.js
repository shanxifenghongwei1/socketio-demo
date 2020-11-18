var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
// 	console.log('一个用户已经连接到了');
// 	socket.on('disconnect', () => {
// 		console.log('一个用户已经断开了');
// 	});
// });

io.on('connection', (socket) => {
	// console.log(socket)
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
		io.emit('chat message',msg) 
	});
});






http.listen(3000, () => {
	console.log('listening on *:3000');
});
