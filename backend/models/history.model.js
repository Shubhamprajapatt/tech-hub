const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  item_id: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    default: Date.now,
    type: Date,
  },
  updatedAt: {
    default: Date.now,
    type: Date,
  },
});

const History = mongoose.model("order", orderSchema);

module.exports = History;
