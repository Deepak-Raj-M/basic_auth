var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add_user', function(req, res, next) {
  res.send({status:true,message:'Registered successfully'});
});

module.exports = router;
