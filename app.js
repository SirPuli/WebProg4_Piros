const express = require('express');
const app = express();
const router = express.Router();
var fs = require('fs');

var data = fs.readFileSync('./files/data.txt','utf8');

var jsonStrig = '[';
var items = data.split('$$$');
for (var i = 0; i < items.length; i+=5) {
  jsonStrig += '{"' + 'title' + '":"' + items[i+3] + '",' +
    '"' + 'originalLabels' + '":"' + items[i+2] + '",'+
    '"' + 'recommandedLabels'+ '":"' + items[i] + '",' +
    '"' + 'alsoRecommandedLabels' + '":"' + items[i+1] + '",' + 
    '"' + 'text' +  '":"' +  items[i+4] + '"},';
}
jsonStrig = jsonStrig.substr(0, jsonStrig.length - 1);
jsonStrig += ']';

var obj = JSON.parse(jsonStrig);


app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use(express.static(__dirname + '/views'));

router.get('/',function(req,res){
  res.render('index', { data: JSON.stringify(obj) })
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use('/', router);
app.listen(process.env.port || 8000);

console.log('Running at Port 8000');