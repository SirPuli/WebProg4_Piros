var http = require('http'),
    fs = require('fs');
    fileReader = require('./js/fileReader');


fs.readFile('./views/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});

        response.write(html);

        fileReader.readFile('./files/data.txt');

        response.end();
    }).listen(8000);
});