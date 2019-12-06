const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({
    user: req.param.user,
    cash: {
      USD: 2901
    },
    stock: {
      AAPL: {
        position: 10
      },
      ICE: {
        position: 25
      }
    }
  });
});

module.exports = router;
