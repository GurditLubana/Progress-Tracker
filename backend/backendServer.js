const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "9878059867gG@",
  database: "progress_tracker",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

conn
  .getConnection()
  .then((connection) => {
    console.log("Connected to MySQL database");
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err.message);
  });

  
app.get("/", (req, res) => {
  res.json("Hello from Backend");
});

app.listen(8081, () => {
  console.log("listening");
});
