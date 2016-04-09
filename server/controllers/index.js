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
            models.messages.get(req, res, function(data){
              console.log('response body',data.body);
              res.end();
            });
      //response.end(JSON.stringify(data));b
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('post in messages')
      console.log('data from post request',req.body);
      models.messages.post(req, res);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get();
      res.end();
    },
    post: function (req, res) {
       models.users.post(req, res);
      res.end();
    }
  }
};

