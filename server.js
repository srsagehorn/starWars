const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const characterData = require("./characterData");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/characters", (req, res) => {
  res.json(characterData);
});

app.get("/api/:character", (req, res) => {
  var chosen = req.params.character;
  const found = characterData.find((char) => char.route == chosen);

  res.json(found || false);
  res.end;
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.post("/add", (req, res) => {
  const newCharacters = req.body;
  characterData.push(newCharacters);
  res.json(newCharacters);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
});
