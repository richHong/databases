var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: '',
  database: "chat"
});

module.exports.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports.end(function(err) {

});

//module.exports.con = con;

