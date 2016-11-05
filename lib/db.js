var mysql = require('mysql');


module.exports = mysql.createConnection({
  host     : process.env.DB_HOST || 'mysql',
  user     : process.env.DB_HOST || 'root',
  password : process.env.DB_HOST || 'test',
  database : process.env.DB_HOST || 'personal_project'
});
