var express = require('express');
var router = express.Router();

const userTable = require('../database/users');

const loginValidation = require('../validation/login');
const registerValidation = require('../validation/register');

var jwt = require('jsonwebtoken');
const config = require('../helpers/config');
const helper = require('../helpers/common');

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
		var token = jwt.sign({ user_id: exists._id }, config.jwtSecret);
		res.send({status:true,message:'Valid credentials. Logging you in...',result:token});
	}
	catch(e){
		// console.log(e);
		if(e == 'not_found')
			err = 'Username or password is invalid';
		res.send({status:false,message:err});
	}
});

router.post('/dashboard', async function(req, res, next) {
	err = 'Something went wrong';
	try{
		var session = helper.verifySession(req.body.session,config.jwtSecret);
		var exists = await userTable.findOne({_id:session.user_id});
		if(!exists) throw 'not_found';
		res.send({status:true,message:'',result:exists});
	}
	catch(e){
		if(e == 'invalid')
			err = 'Invalid session.';
		res.send({status:false,message:err});
	}
});

module.exports = router;
