var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end('Hello world\n');
}).listen(3000);
console.log('server running at http://localhost:3000/');