"use strict";

require('dotenv').config();


const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser = require("body-parser")
const app        = express();



app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Home page
app.get("/index", (req, res) => {
  res.render("index");
});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});