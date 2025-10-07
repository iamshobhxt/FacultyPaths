import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mysql from "mysql2";
// import nodemailer from "nodemailer"; // Email functionality commented out

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected!");
  }
});

/*
// ✅ Setup Nodemailer (Commented out for now)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
*/

// ✅ API Route to Handle Form Submission
app.post("/api/contact", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    subject,
    subCategory,
    details,
    message,
  } = req.body;

  // Save to MySQL
  const sql =
    "INSERT INTO messages (firstName, lastName, email, phone, subject, subCategory, details, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [firstName, lastName, email, phone, subject, subCategory, details, message],
    (err, result) => {
      if (err) {
        console.error("❌ MySQL Insert Error:", err);
        return res.status(500).json({ error: "Database error" });
      }

      console.log("✅ Message saved in MySQL successfully!");

      /*
      // Send Email (Commented out for now)
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "shobhityadav1103@gmail.com",
        subject: `📩 New Contact Form Submission: ${firstName} ${lastName}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Sub Category:</b> ${subCategory}</p>
          <p><b>Details:</b></p>
          <p>${details}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("❌ Email Send Error:", err);
          return res
            .status(500)
            .json({ error: "Message saved but email failed" });
        }
        console.log("✅ Email Sent:", info.response);
      });
      */

      // Respond success for saving data only
      res.json({ message: "Message saved successfully!" });
    }
  );
});

// ✅ Start Server
app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
