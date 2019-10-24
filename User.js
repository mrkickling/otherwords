levensteinDistance = require('./levensteinDistance.js')
TIMER_TIME = 30;

class User {
   constructor(name, sqlManager, socket_id, io, uid, words) {
    this.name = name;
    this.points = 0;
    this.mode = "explain";
    this.word_to_guess = false;
    this.word_to_explain = false;
    this.sqlManager = sqlManager;
    this.seenWords = [];
    this.socket_id = socket_id;
    this.io = io;
    this.uid = uid;
    this.timer = TIMER_TIME;
    this.words = words;
    setInterval(this.timerCounter.bind(this), 1000);
   }

   getWordToExplain(words) {
     this.mode = "explain";
     var keys = Object.keys(words);
     var randomWordKey = keys[ keys.length * Math.random() << 0];
     var randomWord = words[randomWordKey];
     this.seenWords.push(randomWord.word);
     this.word_to_explain = randomWord.word;
     this.word_to_explain_id = randomWord.id;
     var socket = this.io.sockets.connected[this.socket_id];
     if (socket) {
       socket.emit('explain', {
          word: randomWord.word,
          timer: TIMER_TIME
        });
     }
   }

   timerCounter() {
     var socket = this.io.sockets.connected[this.socket_id];
     if (this.mode == "guess") {
       console.log(this.timer);
       this.timer--;
       if (socket) {
         socket.emit('timer', this.timer);
       }
     }
     if (this.timer < 0) {
       this.timeOut(this.words);
       console.log("Lost time");
     }
   }

   timeOut(words) {
     this.timer = TIMER_TIME;
     this.sendAlert("TIME IS UP!");
     this.getWordToExplain(words);
   }

   setSocketID(id) {
     this.socket_id = id;
   }

   setName(name, takenNames) {
     if (takenNames.indexOf(name) >= 0) {
       this.sendAlert("That name is already taken.");
     } else {
       this.name = name;
     }
     this.sendUserInfo();
   }

   giveExplainPoint() {
     this.points++;
     this.sendAlert("Someone correctly guessed a word you explained, 1 point for " + this.name + "!");
     this.sendUserInfo();
   }

   giveGuessPoint() {
     this.points++;
     this.sendAlert("You receive 1 point for a correct guess!");
     this.sendUserInfo();
   }

   sendUserInfo() {
     var socket = this.io.sockets.connected[this.socket_id];
     if (socket) {
       socket.emit("user info", {
         name: this.name,
         points: this.points
       })
     }
   }

   sendAlert(message) {
     var socket = this.io.sockets.connected[this.socket_id];
     if (socket) {
       socket.emit("alert", message)
     }
   }


   getWordToGuess(words, callback) {
     this.mode = "guess";
     var keys = Object.keys(words);
     var randomWordKey;
     var count = 0;
     var found = false;

     while (count < 20 && keys.length > 2) {
       randomWordKey = keys[ keys.length * Math.random() << 0 ];
       if (this.seenWords.indexOf(words[randomWordKey].word) < 0) {
         found = true;
         break;
       }
       count++;
     }

     if (found) {
       var randomWord = words[randomWordKey];
       this.word_to_guess = randomWord;
       this.seenWords.push(randomWord.word);
       this.timer = TIMER_TIME;
       callback(randomWord);
     } else {
       this.mode = "explain";
       callback(false);
     }
   }

   guessCorrect(word) {
     console.log(this.word_to_guess)
     if (levensteinDistance(word.toLowerCase(), this.word_to_guess.word) <= 1) {
       console.log("Guess was correct!!!");
       return true;
     }
     console.log("Guess was incorrect.");
     return false;
   }

   makeGuess() {

   }

   makeExplanation(explanation) {
     if (explanation.length < 1) { return false; }
     var reversed = explanation.split("").reverse().join("");
     if (explanation.includes(this.word_to_explain) ||
        levensteinDistance(this.word_to_explain, explanation) <= 1 ||
        reversed.includes(this.word_to_explain)) {
       return false;
     } else {
       this.sqlManager.addExplanation(this.word_to_explain_id, explanation, this.uid);
       return true;
     }
   }


}

module.exports = User;
