var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hallo ik ben developer ja')
})
 
app.listen(3000)