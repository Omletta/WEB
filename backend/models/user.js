const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // store plain text for now, or we can hash later
});

module.exports = mongoose.model('User', userSchema);
