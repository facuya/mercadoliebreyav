const path = require("path");
const express = require("express");
const port = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log ('Se prendió puerto ${port}'));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/registro.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/login.html"));
});

app.post("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/login.html"));
});
