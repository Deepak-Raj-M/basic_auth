var express = require('express');
var router = express.Router();

const userTable = require('../database/users');

const loginValidation = require('../validation/login');
const registerValidation = require('../validation/register');

var err;

router.post('/register', async function(req, res, next) {
	err = 'Something went wrong';
	try{
		const params = req.body;
		var form = registerValidation(params);
		if(!form.valid){
			err = form.errors;
			throw 'not_valid';
		}
		var already_exists = await userTable.findOne({username:params.username});
		if(already_exists) throw 'already_exists';
		var insert = await userTable.create(req.body);
		res.send({status:true,message:'Successfully registered'});
	}
	catch(e){
		if(e == 'already_exists')
			err = 'Username already exists';
		res.send({status:false,message:err});
	}
});


router.post('/login', async function(req, res, next) {
	err = 'Something went wrong';
	try{
		const params = req.body;
		var form = loginValidation(params);
		if(!form.valid){
			err = form.errors;
			throw 'not_valid';
		}
		var exists = await userTable.findOne(params);
		if(!exists) throw 'not_found';
		res.send({status:true,message:'Valid credentials. Logging you in...',result:exists._id});
	}
	catch(e){
		if(e == 'not_found')
			err = 'Username or password is invalid';
		res.send({status:false,message:err});
	}
});

router.post('/get_user/:id', async function(req, res, next) {
	err = 'Something went wrong';
	try{
		const id = req.params.id;
		var exists = await userTable.findOne({_id:id});
		if(!exists) throw 'not_found';
		res.send({status:true,message:'',result:exists});
	}
	catch(e){
		if(e == 'not_found')
			err = 'No records found';
		res.send({status:false,message:err});
	}
});

module.exports = router;
