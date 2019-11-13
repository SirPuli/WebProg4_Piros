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
 output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

// Update the current slider value (each time you drag the slider handle)



var cikkLista = document.getElementById('cikkLista');
var cikk = document.getElementById('cikk');
var originalLabels = document.getElementById('originalLabels');
var alsoOriginalLabels = document.getElementById('alsoOriginalLabels');
var specialRecommendedLabels = document.getElementById('specialRecommendedLabels');
var recommendedLabels = document.getElementById('recommendedLabels');

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
    var origLabel = item[n]['originalLabels'].split(' ');
    
    originalLabels.innerHTML=null;
    alsoOriginalLabels.innerHTML=null;

    origLabel.forEach(element => {
        if (element.includes("__label__")) {
            originalLabels.innerHTML += element.replace(/@@/g, ' ').replace('__label__', ' ') + '<br>';
            
        } else if (element.includes("geography__") || element.includes("organization__") || element.includes("person__")) {
            alsoOriginalLabels.innerHTML += element.replace(/@@/g, ' ') + '<br>';
        }

        
    }); 

    var recLabel = item[cikkLista.value]['recommendedLabels'].split('__label__');
    recommendedLabels.innerHTML = null;

    recLabel.forEach(element => {
            recommendedLabels.innerHTML += element.replace(/@@/g, ' ') + '<br>';
    });

    var specRecLabel = item[cikkLista.value]['specialRecommendedLabels'].split('__label__');
    specialRecommendedLabels.innerHTML = null;

    specRecLabel.forEach(element => {
            specialRecommendedLabels.innerHTML += element.replace(/@@/g, ' ')+ '<br>';
    });
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
                
            }
        }
    }
    rawFile.send(null);
}*/

