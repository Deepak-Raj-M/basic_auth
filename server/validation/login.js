const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function(data){
	var errors = [];
	data.username = isEmpty(data.username)?'':data.username;
	data.paswd = isEmpty(data.paswd)?'':data.paswd;
	if(Validator.isEmpty(data.username,{ ignore_whitespace:true})){
		errors.push('Username is required');
	}
	if(Validator.isEmpty(data.paswd,{ ignore_whitespace:true})){
		errors.push('paswd is required');
	}
  return {errors:errors,valid:isEmpty(errors)};
}