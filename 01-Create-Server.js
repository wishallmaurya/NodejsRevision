const http = require('http');  //Loads the http module

http.createServer((req,res)=>{
    res.writeHead(200,{

    })  //teling the browser status code
    res.write('hello world');
    res.end();

}).listen(2000);
console.log('server is running' );
