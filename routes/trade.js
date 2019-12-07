const router = require("express").Router();
let Trade = require("../models/trade.model");
let User = require("../models/user.model");

const page_size = 10;
//Get trades for user
router.route("/").get((req, res) => {
  const page = parseInt(req.query.page);
  //Error 400 for invalid page inputs (non integer or negative value)
  if (!(page >= 0)) {
    res.status(400).send({
      status: "Invalid input",
      info: "Page must be 0 or greater"
    });
    return;
  }

  Trade.find({ username: req.query.username }).then(trade => {
    const total_pages = Math.ceil(trade.length / page_size);
    res.json({
      status: "ok",
      data: trade.reverse().slice(page * page_size, (page + 1) * page_size),
      pages: total_pages,
      current_page: page
    });
  });
});

//New order from user
router.route("/submitorder").post((req, res) => {
  console.log(req);
  let qty;
  if (req.body.quantity <= 0) {
    res
      .status(400)
      .send({ status: "Invalid input", info: "Quantity should be at least 1" });
      return
  }
  req.body.side === "sell"
    ? (qty = req.body.quantity * -1)
    : (qty = req.body.quantity);
  const newOrder = new Trade({
    username: req.body.username,
    symbol: req.body.symbol,
    quantity: qty,
    price: req.body.price
  });
  newOrder
    .save()
    .then(() => res.json({ status: "ok" }))
    .catch(e => res.status(400).send({ status: "Invalid input", info: e }));
});

module.exports = router;
