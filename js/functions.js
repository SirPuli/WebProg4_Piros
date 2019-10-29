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
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}



