const express = require("express");

const app = express();

app.use(express.json());

// Health check route (for Railway / uptime checks)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Prime Empire Backend is LIVE ",
    status: "running"
  });
});

// Test API route
app.get("/api/status", (req, res) => {
  res.status(200).json({
    success: true,
    service: "Prime Empire API",
    uptime: process.uptime()
  });
});

// Global error handler (basic safety)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

// Port setup (Railway uses process.env.PORT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});