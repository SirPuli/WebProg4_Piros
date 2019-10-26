function readFile() {

    //Fájl(ok) beolvasása
    const readline = require('readline'), fs = require('fs'), fileReader = readline.createInterface({
        //input: fs.createReadStream('../files/data.txt'), //Tényleges data
        input: fs.createReadStream("../files/dataTest.txt"), //Test data
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
        console.log(article);
    });
}

//readFile();

