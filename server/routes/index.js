var express = require('express');
var router = express.Router();

const userTable = require('../database/users');

router.post('/register', async function(req, res, next) {
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
		res.send({status:true,message:'Valid credentials. Logging you in...',result:exists._id});
	}
	catch(e){
		switch(e){
			case 'not_found':
				res.send({status:false,message:'Username or password is invalid'});
			break;
			default:
			console.log(e);
				res.send({status:false,message:'Something went wrong'});
			break;
		}
	}
});

router.post('/get_user/:id', async function(req, res, next) {
	try{
		const id = req.params.id;
		var exists = await userTable.findOne({_id:id});
		if(!exists) throw 'not_found';
		res.send({status:true,message:'',result:exists});
	}
	catch(e){
		switch(e){
			case 'not_found':
				res.send({status:false,message:'No records found'});
			break;
			default:
			console.log(e);
				res.send({status:false,message:'Something went wrong'});
			break;
		}
	}
});

module.exports = router;
