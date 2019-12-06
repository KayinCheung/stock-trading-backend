const Joi = require("joi");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = require("./config");
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to DB");
});

const portfolioRouter = require("./routes/portfolio");
app.use("/portfolio", portfolioRouter);

const tradeRouter = require("./routes/trade");
app.use("/trade", tradeRouter);

module.exports = app;
