const express = require("express");
const scores = express.Router();
const pool = require("./connection");

scores.get("/scores", (req, res) => {
  console.log("GET FOR SCORES WORKS");
});

scores.post("/scores", (req, res) => {
  console.log("POST FOR SCORES WORKS");
});


module.exports = scores;
