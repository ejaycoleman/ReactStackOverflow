var express = require('express');
var app = express();

app.get('/returnPosts', function(req, res){
  res.send('this is a list of posts');
});

app.get('/submitPost', function(req, res){
  res.send('success!');
});

app.listen(3000);
