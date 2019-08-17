var jwt = require('jsonwebtoken');

module.exports = {
	verifySession : function(token,secret){
		if(!token) throw 'invalid';
		var session = jwt.verify(token,secret);
		if(session)
			return session;
		throw 'invalid';
	}
};