var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello Sjoerd')
})
 
app.listen(3000)