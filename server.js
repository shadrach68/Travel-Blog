import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("index.ejs");
});
app.get("/destination", (req, res) => {
  res.render("index.ejs");
});
app.get("/tips", (req, res) => {
  res.render("index.ejs");
});
app.get("/contact", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
