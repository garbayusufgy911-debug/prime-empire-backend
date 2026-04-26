const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Prime Empire Backend is LIVE 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
