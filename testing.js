const http = require('http')

const vishal = (req, res) => {
    res.writeHead(200);
    res.end('vishal is here')
}
const rohit = (req, res) => {
    res.writeHead(200);
    res.write('rohit is here')
    res.end()
}

const jay = (req, res) => {
    res.writeHead(200);
    res.end('jay is here')
}

http.createServer((req, res) => {
    if (req.url === '/') {
        return vishal(req, res);
    }
    if (req.url === '/rohit') {
        return rohit(req, res);
    }
    if (req.url === '/jay') {
        return jay(req, res);
    }
    res.writeHead(404)
    res.end(http.STATUS_CODES[404])
}).listen(3000)
// console.log(http);
console.log("server is at 3000");