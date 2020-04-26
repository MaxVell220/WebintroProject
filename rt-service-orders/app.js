'use strict';

var SwaggerExpress = require('swagger-express-mw');
const express = require('express');
const path = require('path');
var app = express();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

// to serve docs
app.use(express.static(path.join(__dirname, 'public')));


SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);



  var port = process.env.PORT || 10011;
  app.listen(port);

  console.log('check this to see docs :\n  http://127.0.0.1:' + port + '/');
  
  if (swaggerExpress.runner.swagger.paths['/orders']) {
  	console.log('try this to test:\ncurl http://127.0.0.1:' + port + '/api/v1/orders');
  }
});
