const express = require("express");

const app = express();

// Basic homepage route (Nomba will test this)
app.get("/", (req, res) => {
  res.send("Prime Empire Backend is LIVE 🚀");
});

// Health check route (good for APIs like Nomba)
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is healthy"
  });
});

// Optional API test route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Prime Empire API is working"
  });
});

// IMPORTANT: Render sets PORT automatically
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
