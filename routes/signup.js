const router = require("express").Router();
const { EMAIL } = require("../config");
const { SENDER_NAME, SUBJECT } = require("../constants");
const transporter = require("../transporter");

router.post("/", (req, res) => {
  const { recepient, name } = req.body;

  const mailOptions = {
    from: `${SENDER_NAME} <${EMAIL}>`,
    to: recepient,
    replyTo: EMAIL,
    subject: SUBJECT,
    headers: {
      "x-priority": "1",
      "x-msmail-priority": "High",
      importance: "high",
    },
    template: "index",
    context: {
      name,
    },
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log(`[INFO] Mail Delivered to ${name} : ${new Date()}`);
      return res
        .status(200)
        .json({ status: "Delivered", to: recepient, at: new Date() });
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(500);
    });
});

module.exports = router;
