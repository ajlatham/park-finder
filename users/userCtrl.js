var app = require('./../src/index');
var db = app.get('db');


var bcrypt = require('bcryptjs');


function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash;
}

module.exports = {


	register: function(req, res, next) {
		var user = req.body;


		user.password = hashPassword(user.password);

		db.user_create([user.first_name, user.last_name, user.email, user.password,user.date_updated, user.date_added], function(err, user) {

			if (err) return res.status(500)
				.send(err);


			delete user.password;
			res.status(200)
				.send(user);
		});
	},

	read: function(req, res, next) {
		User.find(req.query, function(err, result) {
			if (err) return res.status(500)
				.send(err);
			for (var i = 0; i < result.length; i++) {
				delete result[i].password;
			}
			res.status(200)
				.send(result);
		});
	},

	me: function(req, res, next) {
console.log('IM HIT');
		if (!req.user) return res.status(401)
			.send('current user not defined');

		var user = req.user;
		console.log(user + "USER I AM");

		delete user.password;

		return res.status(200)
			.json(user);
	},

	update: function(req, res, next) {
		User.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
			if (err) next(err);
			res.status(200)
				.send('user updated');
		});
	}
};
