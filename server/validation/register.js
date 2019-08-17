const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function(data){
	var errors = [];
	data.username = isEmpty(data.username)?'':data.username;
	data.fullName = isEmpty(data.fullName)?'':data.fullName;
	data.dob = isEmpty(data.dob)?'':data.dob;
	data.paswd = isEmpty(data.paswd)?'':data.paswd;
	data.retype_paswd = isEmpty(data.retype_paswd)?'':data.retype_paswd;

	if(Validator.isEmpty(data.username,{ ignore_whitespace:true}))
		errors.push('Username is required');

	if(Validator.isEmpty(data.fullName,{ ignore_whitespace:true}))
		errors.push('Full name is required');

	if(Validator.isEmpty(data.dob,{ ignore_whitespace:true}))
		errors.push('Date of birth is required');

	if(Validator.isEmpty(data.paswd,{ ignore_whitespace:true}))
		errors.push('Password is required');

	if(Validator.isEmpty(data.retype_paswd,{ ignore_whitespace:true}))
		errors.push('Re-enter password is required');

	if(!Validator.equals(data.paswd,data.retype_paswd))
		errors.push('Password and re-type passwords are mismatched');

  return {errors:errors,valid:isEmpty(errors)};
}