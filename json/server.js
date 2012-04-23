var http = require('http'),
    url = require('url');

http.createServer(function (req, res) {
    var urlParsed = url.parse(req.url, true);

    console.log('pathname: ', urlParsed.pathname);

    res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('Hello, MoscowJS!');
    res.end();

}).listen(8080);
