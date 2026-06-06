require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");

const app = express();
connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Manual CORS Middleware for Vercel Serverless
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://bermudez-webprog.vercel.app",
    "https://bermudez-webprog-git-lab-act7-melowdiequs-projects.vercel.app",
  ];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS, PATCH, DELETE, POST, PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
  );

  // Instantly resolve preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;