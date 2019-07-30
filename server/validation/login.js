const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function(data){
	var errors = [];
	data.email = isEmpty(data.email)?'':data.email;
	data.password = isEmpty(data.password)?'':data.password;
	if(Validator.isEmpty(data.email,{ ignore_whitespace:true})){
		errors.push('Email is required');
	}
	if(Validator.isEmpty(data.password,{ ignore_whitespace:true})){
		errors.push('Password is required');
	}
	if (!Validator.isEmail(data.email)){
    errors.push("Please enter a valid email");
	}

  return {errors:errors,valid:isEmpty(errors)};
}