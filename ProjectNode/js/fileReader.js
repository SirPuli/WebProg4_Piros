var list = [];
var twentylist = [];

var readFile =  function(filePath) {
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
    });
    /*
    list.forEach(function (element) {
        console.log(element);
    });
    */
   // console.log(list[20]);
    console.log('A lista hossza: ' + list.length);
    return list;
};

var huszas = function (lista, min, max) {
    for(var i = min; i < max;i++){
       twentylist.push(lista[i]);
    }
    return twentylist;
};

var clearList = function(){
    list = [];
    console.log('Lista törölve! Hossz: ' + list.length);
};
//readFile();