import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mysql from "mysql2";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
  } else {
    console.log("✅ MySQL Connected!");
  }
});

// ✅ API Route
app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, phone, subject, subCategory, details, message } = req.body;

  const sql = `INSERT INTO messages 
  (firstName, lastName, email, phone, subject, subCategory, details, message) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [firstName, lastName, email, phone, subject, subCategory, details, message], (err, result) => {
    if (err) {
      console.error("❌ MySQL Insert Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    console.log("✅ Message saved in MySQL successfully!");
    res.json({ message: "Message saved successfully!" });
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
