// server/index.js

const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

// server/index.js

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});