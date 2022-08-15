const { registerHelper } = require("handlebars");

// less than
Handlebars.registerHelper('lt', function( a, b ){
	var next =  arguments[arguments.length-1];
	return (a < b) ? next.fn(this) : next.inverse(this);
});

module.exports = registerHelper;