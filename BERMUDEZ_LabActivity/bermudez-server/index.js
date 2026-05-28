require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(async (req, res, next) => {
  if (req.path === "/api/health") {
    return next();
  }

  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database middleware error:", error);

    res.status(500).json({
      message: "Database connection failed",
      error: error.message,
    });
  }
});

app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  console.error("Server error:", err);

  res.status(500).json({
    message: "Server Error",
    error: err.message,
  });
});

const PORT = process.env.PORT || 8000;

if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;