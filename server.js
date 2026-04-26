const express = require("express");

const app = express();

app.use(express.json());

// Test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Prime Empire Backend is LIVE 🚀");
});

// Health check route (optional but useful)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// IMPORTANT: Railway uses dynamic PORT
const PORT = process.env.PORT || 3000;

// IMPORTANT: bind to 0.0.0.0 for Railway
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
