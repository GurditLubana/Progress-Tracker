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

async function insertLog(date, report) {
  try {
    // Using placeholders in the query
    const query = "INSERT INTO `loglist` (`Date`, `Report`) VALUES (?, ?)";

    // Execute the query with the provided values
    const [rows] = await conn.execute(query, [date, report]);

    console.log("Log inserted successfully:", rows);
  } catch (error) {
    console.error("Error inserting log:", error.message);
  }
}

app.use(express.json());
app.post("/api/reports", (req, res) => {
  const { report } = req.body;
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " "); // Format date as 'YYYY-MM-DD HH:mm:ss'

  insertLog(formattedDate, report);
  //   console.log("New report received:", report);
  res.json({ message: "Report submitted successfully" });
});

app.get("/", async (req, res) => {
  try {
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
