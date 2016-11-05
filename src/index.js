
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('../lib/db.js');
var path = require('path');
// db.query('SELECT * FROM usersData', function(err, rows, fields) {
//   if (err) throw err;
//
//   console.log(rows);
// });


var app = express();

app.use(cors());
app.use(bodyParser.json());




app.use(express.static(path.join(__dirname,'/public') ));

const str = 'ES6';
console.log(`Hello ${str}`);







var port = 3000;

app.listen(3000, function() {
  console.log('listening on port 3000');
});
