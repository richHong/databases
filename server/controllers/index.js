var models = require('../models');
var bluebird = require('bluebird');
//bluebird.promisifyAll(require('con').prototype)
//client-server requests
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('get in messages');
      models.messages.get();
      //response.end(JSON.stringify(data));
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('post in messages')
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

