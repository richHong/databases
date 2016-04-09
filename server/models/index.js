var con = require('../db');
var mysql = require('mysql');
//database-server requests
module.exports = {
  messages: {
    get: function (request, response) {
      console.log('hello')
      // var con = mysql.createConnection({
      //   host: "127.0.0.1",
      //   port: 3306,
      //   user: "root",
      //   password: '',
      //   database: "chat"
      // });
      con.connect(function(err){
        if(err){
          console.log('Error connecting to Db');
          return;
        }
        console.log('Connection established');
      });
      // con.connect();
      con.end(function(err) {

      });
       // db.query('select * from messages', function (err, rows, fields){
       //   db.end()
       //     if (!err) {
       //        console.log('The solution is: ', rows);
       //     } else {
       //        console.log('Error while performing Query.');
       //     }
       // }) 
     //response.end();
    }, // a function which produces all the messages
    
    post: function (request, reponse) {
      console.log('world')
       db.query('select * from messages', function (err, rows, fields){
          db.end()
          if (!err) {
            console.log('The solution is: ', rows);
          } else {
            console.log('Error while performing Query.');
          }
        })
       response.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (request, response) {},
    post: function (request, reponse) {}
  }
};

