var url = "https://www.google.com"


function log(message)
{
	console.log(message);
}

// The above variable and function is in the current module

// Export
module.exports.log = log;
