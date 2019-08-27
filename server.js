const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));