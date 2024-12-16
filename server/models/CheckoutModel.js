const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  email: { type: String, required: true },
  items: [{
    title: String,
    description: String,
    price: Number,
    quantity: Number
  }],
}, {
  timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
