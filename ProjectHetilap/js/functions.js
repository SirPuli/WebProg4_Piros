 //SideNavbar
 /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
 function openNav() {
  document.getElementById("mySidenav").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
  document.getElementById("closeButton").style.display = "inline-block";
  document.getElementById("openButton").style.display = "none";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("closeButton").style.display = "none";
  document.getElementById("openButton").style.display = "inline-block";
}

//Range Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
 // Display the default slider value

// Update the current slider value (each time you drag the slider handle)



var cikkLista = document.getElementById('cikkLista');
var cikk = document.getElementById('cikk');
var originalLabel = document.getElementById('originalLabel');
var specialRecommendedLabel = document.getElementById('specialRecommendedLabel')
var item=[];
var dataLine = data.split('/**/');

for (let i = 0; i < dataLine.length; i++) {
    var parts = dataLine[i].split('$$$');

    item[i] = {
        'recommendedLabels': parts[0],
        'specialRecommendedLabels': parts[1],
        'originalLabels': parts[2],
        'title': parts[3],
        'text': parts[4]
    };

    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = item[i]['title'];
    cikkLista.appendChild(option);
}
cikkLista.onchange();
function cikkListaOnchange(n) {
    cikk.innerHTML = item[n]['text'];
    var list = item[n]['originalLabels'].split(' ');
    
    //originalLabel.innerHTML = item[n]['originalLabels'].replace(/@@/g, ' ').replace('__label__', ' ').split(' ');
    
    countR = 0;
    list.forEach(element => {
        if (element.includes("__label__")) {
            originalLabel.innerHTML = element.replace(/@@/g, ' ').replace('__label__', ' ') + '<br>';
            countR++;
        } else if (element.includes("geography__") || element.includes("organization__") || element.includes("person__")) {
            specialRecommendedLabel.innerHTML = element.replace(/@@/g, ' ') + '<br>';
        }
    });
    

    rangeOnchange();
}
/*
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file);
    rawFile.onreadystatechange = function ()
    {
        
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                
                //var jsonStrig = '[';
                var items = allText.split('\n').join(',,,').split('$$$').join(',,,').split(',,,');               
                for (var i = 0; i < items.length; i+=5) {
                jsonStrig += '{' + '"recommendedLabel"' + ': ' + '"'+ items[i] + '", ' +
                     '"specialRecommendedLabel"' + ': ' + '"'+items[i+1] + '", '+
                     '"originalLabel"'+ ': ' + '"'+items[i+2] + '", ' +
                     '"title"' + ': ' + '"'+items[i+3] + '", ' + 
                     '"text"' +  ': ' +  '"'+items[i+4] +'"' + '}, ';
                } 

                jsonStrig = jsonStrig.substr(0, jsonStrig.length - 2);
                jsonStrig += ']';
                console.log(jsonStrig);
                obj = JSON.parse(jsonStrig);
                return obj;
                *
            }
        }
    }
    rawFile.send(null);
}*/

