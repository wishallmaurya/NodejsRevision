const http = require('http');  //Loads the http module

http.createServer((req,res)=>{
    res.writeHead(200,{

    })  //teling the browser status code
    res.write('<h1>hello world</h1>');
    res.end();

}).listen(3000);
console.log('server is running' );

