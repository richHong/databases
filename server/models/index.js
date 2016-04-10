var con = require('../db/index.js');
var mysql = require('mysql');
//database-server requests

module.exports = {
  messages: {
    get: function (request, response) {
      con.query('select * from messages', function (err, rows, fields){
        if (!err) {
          console.log('The query result is: ', rows);
          response.send(rows);
        } else {
          console.log('Error while performing Query.');
        }
      }) 
    
    }, 
    
    post: function (request, reponse) {

      var json = request.body;
      var string = 'INSERT INTO messages (username, message, roomname) values ("'+json.username+'","'+json.message+'","'+json.roomname+'")'
  

      con.query(string, function (err, rows, fields){
          if (!err) {
            console.log('Data inserted into messages table ',request.body);
          } else {
            console.log('Error while performing Query.');
          }
          
        });
      
    } 
  },

  users: {
    get: function (request, response) {
    
      con.query('select * from User', function (err, rows, fields){
       if (!err) {
        console.log('The query result is: ', rows);
        response.send(rows);
       } else {
          console.log('Error while performing Query.');
       }
           
      }); 
    },
  

    post: function (request, reponse) {
      var json = request.body;
      var string = 'INSERT INTO User (username) values ("' + json.username +'")'
      con.query(string, function (err, rows, fields){
          if (!err) {
            console.log('Data inserted into user table ',request.body);
          } else {
            console.log('Error while performing Query.');
          }
        });
    }
  }
}