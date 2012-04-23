var http = require('http'),
    url = require('url'),
    fs = require('fs'),

    args = process.argv.slice(2),
    PRIV = require(args[0]).PRIV,
    BEMHTML = require(args[1]).BEMHTML,
    DATA = args[2] && eval(fs.readFileSync(args[2], 'utf-8'));

if (args.length < 3) return console.log(
    "Not enough arguments:\n$ node server.js {PRIV} {BEMHTML} {DATA}")
if (typeof PRIV !== 'function') return console.log(
    "Wrong PRIV type: " + typeof PRIV)
if (typeof BEMHTML !== 'function') return console.log(
    "Wrong BEMHTML type: " + typeof BEMHTML)

http.createServer(function (req, res) {
    var urlParsed = url.parse(req.url, true);

    console.log('Request: ', JSON.stringify(urlParsed));

    res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });

    DATA.url = urlParsed;

    res.write(BEMHTML.apply(PRIV(DATA)));

    res.end();

}).listen(8080);
