require("dotenv").config();
const express = require("express");
const cors = require("cors");
const index = require("./routes/index");
const signup = require("./routes/signup");
const assist = require("./routes/assist");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use("/", index);
app.use("/signup", signup);
app.use("/assist", assist);

app.listen(port, () => {
  console.log(`[INFO: DB] Resuminator Server running at ${port}`);
});
