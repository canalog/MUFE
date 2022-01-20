const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@music.1gz2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  res.send("Thank");
});
app.get("/contact", (req, res) => {
  res.send("Contact");
});

const port = 3000;
app.listen(port, () => {
  console.log("Server started on port 3000");
});
