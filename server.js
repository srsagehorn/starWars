const express = require("express");
const app = express();
const PORT = 3000;

const characterData = require("./characterData");

app.get("/", (req, res) => {
  res.send("Welcome to the Sar Wars app");
});

app.get("/api/characters", (req, res) => {
  res.json(characterData);
});

app.get("/api/characters/:character", (req, res) => {
  var chosen = req.params.character;
  const found = characterData.find((char) => char.route == chosen);

  res.json(found || false);
  res.end;
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
});
