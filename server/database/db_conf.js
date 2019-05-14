const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/basic_app', {useNewUrlParser: true});
module.exports = mongoose;