var models = require('../models');
var bluebird = require('bluebird');
//bluebird.promisifyAll(require('con').prototype)
//client-server requests


module.exports = {
  
  messages: {
    get: function (req, res) {
      models.messages.get(req, res, function(data){
        res.end(data.body);
      });
      
    }, 
    
    post: function (req, res) {
      models.messages.post(req, res);
      res.end();
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res, function(data){
        res.end(data.body);
      });
    },
    
    post: function (req, res) {
       models.users.post(req, res);
      res.end();
    }
  }
};

