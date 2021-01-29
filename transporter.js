const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require('path');

const { EMAIL, PASSWORD } = require("./config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  host: "smtp.gmail.com",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

const handlebarOptions = {
    viewEngine: {
      extName: ".hbs",
      partialsDir: path.resolve(__dirname, "templateViews"),
      defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, "views"),
    extName: ".hbs",
  };

transporter.use(
  "compile",
  hbs(handlebarOptions)
);

module.exports = transporter;
