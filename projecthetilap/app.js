var http = require('http');
var fs = require('fs');
//var sajatmodul = require('./ezasajatmodulom.js');

//create a server object:
http.createServer(function (req, res) {
    //console.log("haha: " + req.url);
    let oldal = req.url;
    if (oldal == '/') {
        //sajatmodul.ezegyfuggveny()
        //sajatmodul.ezamasikfuggveny();

        fs.readFile('index.html', function(err, tartalom){
            res.write(tartalom);
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
