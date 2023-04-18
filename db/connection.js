// connect to the employee_tracker_db
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zaddydaddy",
  database: "employee_tracker_db",
});

connection.connect((err) => {
  if (err) throw err;
  //   console.log("Connected to the employee_tracker_db database.")
});

module.exports = connection;
