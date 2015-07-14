var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(8285, function() {
  console.log('localhost:8285');
});
