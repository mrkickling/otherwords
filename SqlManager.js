class SqlManager {
   constructor(conn) {
   	this.conn = conn;
		this.conn.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
			this.createTablesIfNotExists();
		}.bind(this));
   }

	createTablesIfNotExists() {
		var sql = "CREATE TABLE IF NOT EXISTS explanations (id INT AUTO_INCREMENT PRIMARY KEY, word int(255), explainer VARCHAR(255), explanation VARCHAR(141), added DATETIME)";
		this.conn.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Table explanations created");
		});
		var sql = "CREATE TABLE IF NOT EXISTS words (id INT AUTO_INCREMENT PRIMARY KEY, word VARCHAR(100))";
		this.conn.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Table words created");
		});
	}

   getAllWords(callback){
		this.conn.query("SELECT * FROM words", function(err, rows, fields){
			if (err){
			  console.log(err);
			  throw err;
			}
			callback(rows);
			return rows;
		});
   }

	 getAllExplanations(callback){
		this.conn.query("SELECT * FROM explanations LEFT JOIN words ON explanations.word = words.id", function(err, rows, fields){
			if (err){
			  console.log(err);
			  throw err;
			}
			callback(rows);
			return rows;
		});
   }

	 getExplanationsForWord(id, callback) {
		 this.conn.query("SELECT * FROM explanations WHERE word = ? LIMIT 5", [id], function(err, rows, fields){
			 if (err){
				 console.log(err);
				 throw err;
			 }
			 callback(rows);
			 return rows;
		 });
	 }

	 addExplanation(word_to_explain_id, explanation, explainer) {
		 console.log("--------------");
		 console.log(word_to_explain_id);
		 console.log(explanation);
		 console.log("--------------");

		 this.conn.query("INSERT INTO explanations (word, explanation, explainer) VALUES(?, ?, ?)", [word_to_explain_id, explanation, explainer], function(err, rows, fields){
			 if (err){
				 console.log(err);
				 throw err;
			 }
			 return true;
		 });
	 }

}

module.exports = SqlManager;
