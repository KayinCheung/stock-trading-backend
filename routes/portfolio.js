const router = require("express").Router();

const sectors = ["Finance",]

router.route("/").get((req, res) => {
  res.json({
    user: req.param.user,
    cash: {
      USD: 2901
    },
    stock: {
      AAPL: {
        position: 20,
        cost_basis: 142.51,
        sector: "Electronic Technology"
      },
      ICE: {
        position: 25,
        cost_basis: 85.23,
        sector: "Finance"
      },
      SPY: {
        position: 30,
        cost_basis: 315,
        sector: "Miscellaneous"
      },
      MO: {
        position: 100,
        cost_basis: 42.34,
        sector: "Consumer Non-Durables"
      },
      BTI: {
        position: 100,
        cost_basis: 39.99,
        sector: "Consumer Non-Durables"
      },
      WORK: {
        position: -100,
        cost_basis: 28.55,
        sector: "Technology Services"
      },

      BYND: {
        position: -20,
        cost_basis: 75.55,
        sector: "Consumer Non-Durables"
      },
      PTON: {
        position: -30,
        cost_basis: 30,
        sector: "Consumer Services"
      },
    }
  });
});

module.exports = router;
