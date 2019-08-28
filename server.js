const express = require("express");
const cors = require("cors");
const app = express();
const questions = require('./question.api');
const scores = require("./scores.api");


app.use(cors());
app.use(express.json());
app.use("/", questions);
app.use("/", scores);


const port = 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
