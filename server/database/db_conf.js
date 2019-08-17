const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/basic_app', {useNewUrlParser: true,useCreateIndex:true});
module.exports = mongoose;