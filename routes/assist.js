const router = require("express").Router();
const { EMAIL } = require("../config");
const { ADMIN_EMAIL_1, ADMIN_EMAIL_2 } = require("../constants");
const transporter = require("../transporter");

router.post("/", (req, res) => {
  const { email, name } = req.body;
  const event = "Downloading Resume";
  const action = `mailto:${email}`;
  const date = new Date();

  const mailOptions = {
    from: `Resuminator Support <${EMAIL}>`,
    to: ADMIN_EMAIL_1,
    cc: ADMIN_EMAIL_2,
    replyTo: EMAIL,
    subject: "Assist Request Detected!",
    headers: {
      "x-priority": "1",
      "x-msmail-priority": "High",
      importance: "high",
    },
    template: "assist",
    context: {
      name,
      email,
      event,
      date,
      action
    },
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log(`[INFO] Mail Delivered to ${name} : ${new Date()}`);
      return res
        .status(200)
        .json({ message: "Delivered", to: email, at: new Date() });
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(500);
    });
});

module.exports = router;
