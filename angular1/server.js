var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use('/vendors', express.static(__dirname + '/node_modules/')); // Avoid exposing interval path

app.get('/', function(req,res){
  res.redirect('/index.html');
});

app.listen(8080);
