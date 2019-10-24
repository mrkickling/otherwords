var TIMER_TIME = 30;
var express = require('express')
var mysql = require('mysql')
SqlManager = require('./SqlManager.js')
User = require('./User.js')

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

var sqlManager = new SqlManager(con);
var words = [];
var explanations = [];
var users = {};

sqlManager.getAllWords(function(data){
  words = data;
})

sqlManager.getAllExplanations(function(data){
  explanations = data;
})

// Routing
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {

  console.log("User connected");

  socket.on('login', function(session_id) {
    if (users[session_id]) { // Check if user already exists
      console.log("User exists");
      var old_socket_id = users[session_id].socket_id
      if (io.sockets.connected[old_socket_id]) { // Disconnect old
        io.sockets.connected[old_socket_id].emit('alert', "You seem to be using to browser windows, this one is being closed now");
        io.sockets.connected[old_socket_id].disconnect();
      }
      socket.user = users[session_id];
      socket.user.setSocketID(socket.id);
    } else {
      var randomUserName = words[Math.round(words.length*Math.random())].word + "_" + Math.round(100000*Math.random());
      var user = new User(randomUserName, sqlManager, socket.id, io, session_id, words);

      users[session_id] = user;
      socket.user = user;
    }

    if (socket.user.mode == "explain") {
      var randomWord = socket.user.getWordToExplain(words);
    } else {
      socket.user.getWordToGuess(explanations, function(randomWord) {
        if (randomWord == false) { // Send new word to explain if no word to guess
          console.log("No explanations in sight ...");
          randomWord = socket.user.getWordToExplain(words);
        } else {
          socket.emit('guess', {
            explanation: randomWord.explanation,
            timer: TIMER_TIME
          });
        }
      });
    }
    socket.user.sendUserInfo();

  })

  socket.on('name', function (data) {
    console.log("Changing name to " + data);
    socket.user.setName(data, []);
  });

  socket.on('explain', function (data) {
    if (socket.user && socket.user.mode == "explain") {
      if (socket.user.makeExplanation(data)) {
        explanations.push({
          word: socket.user.word_to_explain,
          explanation: data,
          uid: socket.user.uid
        })
        socket.user.getWordToGuess(explanations, function(randomWord) {
          if (randomWord == false) { // Send new word to explain if no word to guess
            console.log("No explanations in sight ...");
            randomWord = socket.user.getWordToExplain(words);
          } else {
            socket.emit('guess', {
              explanation: randomWord.explanation,
              timer: TIMER_TIME
            });
          }
        });
      } else {
        socket.user.sendAlert("Your explanation was not accepted, " + socket.user.name);
      }
    }
  });

  socket.on('guess', function (data) {
    if (socket.user && socket.user.mode == "guess") {
      if (socket.user.guessCorrect(data)) { // Guess was correct
        var explainer = users[socket.user.word_to_guess.uid];
        if (explainer) {
          explainer.giveExplainPoint();
        }
        socket.user.giveGuessPoint();
        randomWord = socket.user.getWordToExplain(words);
      } else {
        socket.emit('wrong');
      }
    }
  });

});
