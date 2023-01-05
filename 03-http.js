const http = require('http');
const port=3000;
const index = (req, res) => {
    res.writeHead(200);
    res.end(`hello world`)
}
const index2 = (req, res) => {
    res.writeHead(200);

    res.end(`hello India`)
}

http.createServer((req, res) => {
    if (req.url === '/') {
        return index(req, res)
    }
    if (req.url === '/index1') {
        return index2(req, res)
    }

    res.end(http.STATUS_CODES[404])
}).listen(port);

console.log(`severve is 3000`); 