const http = require("http");

const server = http.createServer((req, res) => {
	console.log('connect');
	console.log(req.headers);
	res.setHeader('Content-type', "text/html");
	res.setHeader("X-Foo", "bar");
	res.writeHeader(200, {'Content-Type':'text/plain'});
	res.end('ok');
})

server.listen(8088);




// var xhr = new XMLHttpRequest;
// xhr.open("get", "http:127.0.0.1:8080", true);
// xhr.send(null);
// xhr.responseText
// xhr.HEADERS_RECEIVED



