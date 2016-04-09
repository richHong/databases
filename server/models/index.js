var con = require('../db/index.js');
var mysql = require('mysql');
//database-server requests

module.exports = {
  messages: {
    get: function (request, response) {

      console.log('get in models')
      console.log('response',response)
      // var con = mysql.createConnection({
      //   host: "127.0.0.1",
      //   port: 3306,
      //   user: "root",
      //   password: '',
      //   database: "chat"
      // });

      // con.connect(function(err){
      //   if(err){
      //     console.log('Error connecting to Db');
      //     return;
      //   }
      //   console.log('Connection established');
      // });
    
       con.query('select * from messages', function (err, rows, fields){
           if (!err) {
              console.log('The query result is: ', rows);
              response.send(rows);
           } else {
              console.log('Error while performing Query.');
           }
         //con.end()
       }) 
     //response.end();
    }, // a function which produces all the messages
    
    post: function (request, reponse) {

      console.log('world')
      console.log('data from post request',request.body);
      var json = request.body;
      console.log('json.username:', json.username)
      
      // var con = mysql.createConnection({
      //   host: "127.0.0.1",
      //   port: 3306,
      //   user: "root",
      //   password: '',
      //   database: "chat"
      // });
      
      var string = 'INSERT INTO messages (username, message, roomname) values ("'+json.username+'","'+json.message+'","'+json.roomname+'")'
      console.log('string', string);

      con.query(string, function (err, rows, fields){
          if (!err) {
            console.log('Data inserted into messages table ',request.body);
          } else {
            console.log('Error while performing Query.');
          }
          //con.end()
        });
       //   con.query('INSERT INTO messages (username, message, roomname) values ("rich","i like coffee","lobby")', 
       // function (err, rows, fields){
       //    if (!err) {
       //      console.log('Data inserted into table ',request.body);
       //    } else {
       //      console.log('Error while performing Query.');
       //    }
       //    con.end()
       //  })
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.

    get: function (request, response) {
      
    //   var con = mysql.createConnection({
    //     host: "127.0.0.1",
    //     port: 3306,
    //     user: "root",
    //     password: '',
    //     database: "chat"
    // })

    con.query('select * from User', function (err, rows, fields){
           if (!err) {
              console.log('The query result is: ', rows);
           } else {
              console.log('Error while performing Query.');
           }
           
         //con.end()
       }); 
  },
  

    post: function (request, reponse) {
      var json = request.body;
      console.log('json.username:', json.username)
       
      //  var con = mysql.createConnection({
      //   host: "127.0.0.1",
      //   port: 3306,
      //   user: "root",
      //   password: '',
      //   database: "chat"
      // });

       var string = 'INSERT INTO User (username) values ("' + json.username +'")'
      
      console.log('string', string);

      con.query(string, function (err, rows, fields){
          if (!err) {
            console.log('Data inserted into user table ',request.body);
          } else {
            console.log('Error while performing Query.');
          }
          //con.end()
        });
    }
  }
}