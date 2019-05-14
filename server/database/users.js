const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
  username: String,
  paswd: String,
  fullName: String,
  dob: String,
});

module.exports = mongoose.model('users',users);