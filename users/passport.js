var passport = require('passport');
var LocalStrategy = require('passport-local')
	.Strategy;


var bcrypt = require('bcryptjs');


var app = require('./../src/index');
var db = app.get('db');
// var db = require('./../src/db')


function verifyPassword(submitedPass, userPass) {
	return bcrypt.compareSync(submitedPass, userPass);
}


passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(email, password, done) {
console.log(email, password);
	db.user_search_email([email], function(err, user) {
console.log(user[0] + "HHHHHHHHHHH");
		user = user[0];


		if (err) return done(err);


		if (!user) return done(null, false);


		if (verifyPassword(password, user.password)) return done(null, user);


		return done(null, false);
	});
}));


passport.serializeUser(function(user, done) {
console.log(user + "THIS");
	done(null, user.id);
});
passport.deserializeUser(function(id, done) {
	db.user_search_id([id], function(err, user) {
console.log(err + "I AM ERROR");
		done(err, user[0]);
	});
});

module.exports = passport;
