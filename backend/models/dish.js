const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  available: Boolean,
});

module.exports = mongoose.model('Dish', dishSchema);
