require("dotenv").config();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || "3306",
  database: process.env.DB_DATABASE
});

const tableName = "carts";

const handler = async event => {
  con.query(`SELECT * FROM ${tableName}`, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  return "Database Created";
};

exports.handler = handler;

handler().then(console.log);
