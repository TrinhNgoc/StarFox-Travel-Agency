/*
  INIT AND LIBRARIES
*/
var express = require('express');
var app = express();

/*
  MIDDLEWARE
*/
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

/*
  ROUTES
*/
app.get('/', function(req, res) {

  var locals = {
    myname: "so annoying"
  }

  locals.mypets :
      "mochi",
      "mochi",
      "boba",
      "cookie",
      "cat"
    ]
  res.render('./index.ejs', {

  });
});

/*
  EXPORT THIS FILE AS A MODULE
*/
module.exports.app = app;