var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ih3b2000A",
  database: "delivery",
});

module.exports = connection;
