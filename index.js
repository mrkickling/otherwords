var express = require('express')
var mysql = require('mysql')
SqlManager = require('./SqlManager.js')

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path');
var port = process.env.PORT || 80;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

/* Start connection to mysql database */
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'synonym',
  password: ''
});

var sqlManager = new SqlManager(con)

// Routing
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {
	console.log("User connected");
  socket.emit('login', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
