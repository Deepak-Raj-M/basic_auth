var express = require('express');
var router = express.Router();

const userTable = require('../database/users');

router.post('/add_user', async function(req, res, next) {
	try{
		const params = req.body;
		var already_exists = await userTable.findOne({username:params.username});
		if(already_exists) throw 'already_exists';
		var insert = await userTable.create(req.body);
		res.send({status:true,message:'Successfully registered'});
	}
	catch(e){
		switch(e){
			case 'already_exists':
				res.send({status:false,message:'Username already exists'});
			break;
			default:
				res.send({status:false,message:'Something went wrong'});
			break;
		}
	}
});


router.post('/login', async function(req, res, next) {
	try{
		const params = req.body;
		var exists = await userTable.findOne(params);
		if(!exists) throw 'not_found';
		res.send({status:true,message:'Successfully registered',result:already_exists});
	}
	catch(e){
		switch(e){
			case 'not_found':
				res.send({status:false,message:'Username or password is invalid'});
			break;
			default:
				res.send({status:false,message:'Something went wrong'});
			break;
		}
	}
});

module.exports = router;
