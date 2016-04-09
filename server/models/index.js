var db = require('../db');

//database-server requests
module.exports = {
  messages: {
    get: function (request, response) {}, // a function which produces all the messages
    post: function (request, reponse) {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (request, response) {},
    post: function (request, reponse) {}
  }
};

