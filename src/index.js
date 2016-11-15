
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('../lib/db.js');
var path = require('path');
var massive = require('massive');
var https = require('https');

var config = require('../config.js')



// db.query('SELECT * FROM usersData', function(err, rows, fields) {
//   if (err) throw err;
//
//   console.log(rows);
// });

var app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());

var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
	connectionString: massiveUri
});
app.set('db', massiveServer); //
var db = app.get('db');

var UserController = require('../users/userCtrl.js')
// var UserController = require('./../users/uCtrl.js')


// app.use(express.static(path.join(__dirname,'/public') ));

var config = require('../config');

app.use(express.static(__dirname + '/public'));

// var massiveInstance = massive.connectSync({
//   connectionString: config.MASSIVE_URI
// });
// app.set('db', massiveInstance);
// var db = app.get('db');

var dbSetup = require('../users/dbSetup');
// dbSetup.run();

var UserCtrl = require('../users/userCtrl.js');

var passport = require('./../users/passport.js');

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	next();
};

app.use(session({
	secret: config.SESSION_SECRET,
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', {
	successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});

app.post('/register', UserCtrl.register);
// app.get('/user', UserCtrl.read);
app.get('/me', isAuthed, UserCtrl.me);
// app.put('/user/:_id', isAuthed, UserCtrl.update);

app.get('/places', function(req, res) {

	var location = req.query.location;
	var radius = req.query.radius;
	var type = req.query.type;

	var options = {
	  hostname: 'maps.googleapis.com',
	  port: 443,
	  path: '/maps/api/place/nearbysearch/json?key=AIzaSyDuUGIVkK95i5NaprW7UvpsQVCB06xhb7w&location=' + location + '&radius=' + radius + '&type=' + type,
	  method: 'GET'
	};

	var request = https.request(options, (response) => {
	  // console.log('statusCode:', res.statusCode);
	  // console.log('headers:', res.headers);
		var body = '';
	  response.on('data', (d) => {
			body += d;
	  });
		response.on('end', () => {
			var parsed = JSON.parse(body);
			res.json(parsed);
		});
	});
	request.end();

	request.on('error', (e) => {
	  console.error(e);
		res.end();
	});
});


// var port = config.PORT;
// app.listen(port, function() {
// 	console.log('Listening on port ' + port);
// });
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port 3000');

})


// app.post("/signup", function(req, res){
//   var user=req.body.user;
//   var SALT_ROUNDS = 10;
//   console.log(user);
//   // bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash){
//   //   if(err) throw err;
//       res.json({
//         successful: false,
//         message: "Already exisiting account"
//       });
//     db.query("INSERT INTO `usersData` (`first_name`, `last_name`, `email`, `password`, `date_updated`, `date_added`) VALUES (?,?,?,?,UNIX_TIMESTAMP(),UNIX_TIMESTAMP())", [
//       user.first_name,
//       user.last_name,
//       user.email,
//       hash
//     ], function(err, results){
//         if(err) throw err;
//       res.json({
//         successful: true,
//         message: "You have now signed up"
//       });
//
//     });
//   });
//   res.end();
// });
