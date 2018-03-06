var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer((req, res) => {

    // Pega a url
    var url = req.url;
    if (url === '/' || url === '/home') {
        url = '/index.html';
    } else {
        url = '/404.html';
    }
    // Modifica o Content-Type no Header de acordo com a extensão do arquivo
    var extension = path.extname(url);
    switch(extension) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    res.writeHead(200, {'Content-Type': contentType,});
    var rs = fs.createReadStream(__dirname + url);
    rs.pipe(res);
    console.log('Request na url: ' + url);
});

server.listen(3000, () => {
    console.log('Server rodando em http://localhost:3000');
});