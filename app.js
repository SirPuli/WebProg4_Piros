var http = require('http'),
    fs = require('fs');
    fileReader = require('./js/fileReader');
var min = 10,
    max = min + 20;



fs.readFile('./views/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});

        response.write(html);
        response.end();
    }).listen(8000);
});

