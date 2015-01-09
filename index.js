var argOptions = {},
	argParams  = [];

var rx = /^-?-([\w-]+)(?:=(.*))?$/
var argv = process.argv.slice(0); // Clone process.argv array instead of copying it's reference

argv.shift();
argv.shift();

argv.forEach(function(item) {
	if (matches = item.match(rx)) {
		var key = matches[1];
		var val = matches[2] ? matches[2] : true;

		if (argOptions[key]!=undefined) {
			if( !(typeof argOptions[key] == "Array") )
				argOptions[key] = [argOptions[key]];

			argOptions[key].push(val);
		}
		else
			argOptions[key] = val;
	}
	else
		argParams.push(item);
});

exports.opts = argOptions;
exports.params = argParams;