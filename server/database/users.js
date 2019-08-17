const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
  username: {type : String, index : true},
  paswd: String,
  fullName: String,
  dob: String,
});

module.exports = mongoose.model('users',users);