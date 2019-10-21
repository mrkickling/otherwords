class SqlManager {
   constructor(conn) {
   	this.conn = conn;
		this.conn.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		});
   }

	createTablesIfNotExists() {
		
	}

	likeRestaurant(user_id, restaurant_id, callback){
		this.conn.query('INSERT INTO ratings(user_id, restaurant_id, favourite, time) VALUES(?, ?, TRUE, NULL)',
		[user_id, restaurant_id],
		function (error, results, fields) {
		  if (error) throw error;
		  callback("Liked!");
		  return;
		});
	}

   restaurantCredentialsCorrect(email, pass, callback){
		this.conn.query("SELECT * FROM restaurants WHERE login_email = ? AND password = ?", [email, pass], function(err, rows, fields){
			if (err){
			  console.log(err);
			  throw err;
			}
			callback(rows);
			return rows;
		});
   }

   updateRestaurantInfo(email, name, phone, info, main_img, id, callback){
      this.conn.query("UPDATE restaurants SET email = ?, name = ?, telephone = ?, info = ?, img = ? WHERE id = ?", [email, name, phone, info, main_img, id], function(err, rows, fields){
			if (err){
			  console.log(err);
			  throw err;
			}
			callback("success");
			return;
		});
   }

}

module.exports = SqlManager;
