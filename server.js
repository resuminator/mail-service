require("dotenv").config();
const express = require("express");
const signup  = require("./routes/signup");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

app.use("/signup", signup);

app.listen(port, () => {
  console.log(`[INFO: DB] Resuminator Server running at ${port}`);
});
