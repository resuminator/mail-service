require("dotenv").config();
const express = require("express");
const cors = require("cors");
const index  = require("./routes/index");
const signup  = require("./routes/signup");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use('/', index)
app.use("/signup", signup);

app.listen(port, () => {
  console.log(`[INFO: DB] Resuminator Server running at ${port}`);
});
