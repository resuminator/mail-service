const router = require("express").Router();
const { EMAIL } = require("../config");
const transporter = require("../transporter");

router.post("/", (req, res) => {
  const { recepient, name } = req.body;

  const mailOptions = {
    from: EMAIL,
    to: recepient,
    subject: "🎉 Welcome to Resuminator Early Access Program!",
    text: "Wooohooo it works!!",
    template: "index",
    context: {
      name,
    },
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      return res
        .status(200)
        .json({ msg: "you should receive an email from us" });
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(500);
    });
});

module.exports = router;
