var list = [];

var fileReader =  function(filePath) {
    const fs = require('fs');
    const readline = require('readline');



    //Fájl(ok) beolvasása

    const fileReader = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        console: false
    });
    //Sorok feldarabolása
    fileReader.on('line', function (line) {
        var dataLine = line.split("$$$");

        var article = {
            'title': dataLine[3],
            'originalLabels': dataLine[2],
            'recommandedLabels': dataLine[0],
            'alsoRecommandedLabels': dataLine[1],
            'text': dataLine[4]
        };
        list.push(article);
        console.log(list.length);
    });
    console.log(list.length);

}

exports.readFile = fileReader;

//readFile();