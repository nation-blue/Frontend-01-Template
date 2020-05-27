const http = require("http");

const server = http.createServer((req, res) => {
	console.log('connect');
	// console.log(req.headers);
	res.setHeader('Content-type', "text/html");
	res.setHeader("X-Foo", "bar");
	res.writeHeader(200, {'Content-Type':'text/plain'});
	res.end(
`<html maa=b>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<style type="text/css">
		body div #myid{
			width:100px;
			background-color: #ff5000;
		}
		body div img{
			width: 300px;
			background-color: #ff1111;
		}
	</style>
	<body>
		<div>
			<img src="" alt="" id="myid" />
			<img />
		</div>
	</body>
</html>`);
})

server.listen(8088);




// var xhr = new XMLHttpRequest;
// xhr.open("get", "http:127.0.0.1:8080", true);
// xhr.send(null);
// xhr.responseText
// xhr.HEADERS_RECEIVED



