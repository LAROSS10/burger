var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  //  port
  port: 3306,

  //  username
  user: "root",

  //  password
  password: "Lorisql1234",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // connection.end();
});

// connection.query("SELECT * FROM burgers", function(err, dbResponse){
//   if (err) throw err;
//   // for (let i=0 ; i<dbResponse.length;i++) {
//   //   // console.log(dbResponse[i].flavor);
  
//   // }
//   console.log(dbResponse);
//   connection.end();
// });

module.exports = connection;