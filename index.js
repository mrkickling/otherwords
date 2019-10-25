var TIMER_TIME = 30;
var express = require('express')
var mysql = require('mysql')
SqlManager = require('./SqlManager.js')
User = require('./User.js')
TopList = require('./TopList.js')
getIndexOfWordInList = require('./wordListFunctions.js')
var striptags = require('striptags');
require('dotenv').config()
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
io.set('origins', '*:*');

var path = require('path');
var port = process.env.PORT || 80;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

/* Start connection to mysql database */
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: 'synonym',
  password: process.env.DB_PASS
});

var words = [];
var explanations = [];
var users = {};
var topList = new TopList();

var sqlManager = new SqlManager(con, function() {
  sqlManager.getAllWords(function(data){
    words = data;
    sqlManager.getAllExplanations(function(data){
      explanations = data;

      for (var i = 0; i < explanations.length; i++) {
        var current_word = explanations[i].word;
        var index_in_word_list = getIndexOfWordInList(current_word, words)
        if (!index_in_word_list) continue;
        words[index_in_word_list].explanations = []
        words[index_in_word_list].explanations.push(explanations[i]);
      }
    })
  })
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {

  console.log("User connected");

  socket.on('login', function(session_id) {
    if (users[session_id]) { // Check if user already exists
      console.log("User exists");
      var old_socket_id = users[session_id].socket_id
      if (io.sockets.connected[old_socket_id]) { // Disconnect old
        io.sockets.connected[old_socket_id].emit('alert', "You seem to be using more than one browser windows, this one is being closed now");
        io.sockets.connected[old_socket_id].disconnect();
      }
      socket.user = users[session_id];
      socket.user.setSocketID(socket.id);
    } else {
      var randomUserName = words[Math.round(words.length*Math.random())].word + "_" + Math.round(100000*Math.random());
      var user = new User(randomUserName, sqlManager, socket.id, io, session_id, words);

      users[session_id] = user;
      topList.addUser(user);
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
    io.emit('toplist', topList.top10());

  })

  socket.on('name', function (data) {
    console.log("Changing name to " + data);
    socket.user.setName(data, []);
    io.emit('toplist', topList.top10());
  });

  socket.on('explain', function (data) {
    data = striptags(data);
    if (socket.user && socket.user.mode == "explain") {
      if (socket.user.makeExplanation(data)) {
        var expl_obj = {
          word: socket.user.word_to_explain,
          explanation: data,
          explainer: socket.user.uid
        };
        explanations.push(expl_obj) // Add to explanations
        var indexInList = getIndexOfWordInList(expl_obj.word, words);
        if (!words[indexInList].explanations) {
          words[indexInList].explanations = [];
        }
        words[indexInList].explanations.push(expl_obj); // Add to words
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
        var explainer = users[socket.user.word_to_guess.explainer];
        if (explainer) {
          explainer.giveExplainPoint();
        }
        socket.user.giveGuessPoint();
        io.emit('toplist', topList.top10());
        randomWord = socket.user.getWordToExplain(words);
      } else {
        socket.user.giveNewHint(words);
      }
    }
  });
});
