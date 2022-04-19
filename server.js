const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const socketio = require('socket.io');

const PORT = process.env.PORT || 3000;
const io = socketio(server, {
	cors: {
		origin: '*',
		method: ['GET', 'POST'],
	},
});
const users = [];

app.use(cors());

app.get('/', (req, res) => {
	res.send('Server is up and running.');
});

io.on('connection', (socket) => {
	console.log(`Your socket ID is: ${socket.id}`);
	socket.emit('socketid', socket.id);

	// 	socket.on('disconnect', () => {
	// 	    socket.broadcast.emit('callended')
	// 	})
	// });
});

server.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
