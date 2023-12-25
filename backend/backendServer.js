const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();

app.use(cors());

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


app.use(express.json()); // Middleware to parse JSON in the request body

app.post("/api/reports", (req, res) => {
  const { report } = req.body;

  console.log("New report received:", report);

  

});


app.get("/", async (req, res) => {
  try {
    // Example query
    const [rows] = await conn.query("SELECT * FROM progress_tracker.loglist;");
    res.json(rows);
  } catch (error) {
    console.error("Error executing query:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(8081, () => {
  console.log("listening");
});
