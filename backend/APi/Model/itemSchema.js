const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  assets: {
    type: String,
    require: true,
  },
  last_trade: {
    type: String,
    require: true,
  },
  H_24: {
    type: String,
    require: true,
  },
  change: {
    type: String,
    require: true,
  },
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
