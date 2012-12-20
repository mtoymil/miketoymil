var express = require('express');
var app = express();

app.configure(function() {
  //app.set('views', __dirname + '/templates/');
  app.use('/media', express.static(__dirname + '/media'));                                     
  app.use('/', express.static(__dirname + '/templates/'));
});
app.get('/hello', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(3000);
console.log('Listening on port 3000');
