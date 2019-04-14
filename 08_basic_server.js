var http = require('http');
var fs = require('fs');

// 404 response:
function send404response(response)
{
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page not found.");
	response.end();
}

// Hendle a user's request:
function onRequest(request, response)
{
	// if try to connect to the homepage
	if (request.method == 'GET' && request.url == '/')
	{
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./08_index.html").pipe(response);
	}
	else
	{
		send404response(response);
	}

	/*
	console.log("A user made a request " + request.url);
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Here is some data");
	response.end();
	*/
}

http.createServer(onRequest).listen(8888);
console.log("Server in now running...");
