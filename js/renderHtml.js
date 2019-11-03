var obj;
var CikkLista = document.getElementById('cikklista');

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // if it worked, parse that string, make it back into an object
         obj = JSON.parse(this.responseText);
        console.log(obj)//do with it as you please :)
    }
};
xmlhttp.open("GET", "/", true);
xmlhttp.send();

function renderHtml(){
    
    var htmlString = "";
    for(i=0; i < obj.length;i++){
        htmlString += "<option>" + obj[i].title + "</option>";
    }
    CikkLista.insertAdjacentHTML("beforeend", htmlString);
   };
renderHtml();