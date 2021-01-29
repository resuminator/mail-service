const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({
    message: "Resuminator Mailer Webhook Service",
    status: "Connected",
    deployedOn: "Heroku-18",
    GH_Actions: "Active",
    current_time: new Date()
  });
});

module.exports = router;