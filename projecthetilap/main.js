var http = require('http');
var fs = require('fs');
var readFile = require('./js/fileReader.js');

//create a server object:
http.createServer(function (req, res) {
    console.log("haha: " + req.url);
    oldal = req.url;
    if (oldal == '/') {
        fs.readFile('./views/index.html', function(err, tartalom){
            res.write(tartalom);
            readFile.readFile("./files/data.txt");
            res.end();
        });
    } else if (oldal == '/rolunk') {
        res.write('RÓLUNK');
        res.end();
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write('AJJAJ');
        res.end();
    }

}).listen(8080); //the server object listens on port 8080
