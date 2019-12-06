const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tradeSchema = new Schema(
  {
    username: { type: String, required: true },
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Trade = mongoose.model("Trade", tradeSchema);

module.exports = Trade;
