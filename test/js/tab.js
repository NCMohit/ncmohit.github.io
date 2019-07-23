function openbar(evt, cityName) {
  var p, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (p = 0; p < tabcontent.length; p++) {
    tabcontent[p].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (p = 0; p < tablinks.length; p++) {
    tablinks[p].className = tablinks[p].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function uploadimg(){
  document.getElementById('fileupload').click();
}
function startshine(){
  document.getElementById("colorbox").classList.add("shine");
  document.getElementById("colorbox2").classList.add("shine");
  document.getElementById("effectmain").classList.add("shine");
  document.getElementById("effectmain").innerHTML = "Shine";
}
function removeeffect(){
  document.getElementById("colorbox").classList.remove("shine");
  document.getElementById("colorbox2").classList.remove("shine");
  document.getElementById("effectmain").classList.remove("shine");
  document.getElementById("effectmain").innerHTML = "None";
}
function addicon1fb(){
  document.getElementById("icon1").innerHTML = "<p class='zmdi zmdi-facebook-box' style='float: left;'></p>Facebook";
}
function addicon1em(){
  document.getElementById("icon1").innerHTML = "<p class='zmdi zmdi-email' style='float: left;'></p>E-Mail";
}
function addicon1ws(){
  document.getElementById("icon1").innerHTML = "<p id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></p>Whatsapp";
}
function addicon2fb(){
  document.getElementById("icon2").innerHTML = "<p class='zmdi zmdi-facebook-box' style='float: left;'></p>Facebook";
}
function addicon2em(){
  document.getElementById("icon2").innerHTML = "<p class='zmdi zmdi-email' style='float: left;'></p>E-Mail";
}
function addicon2ws(){
  document.getElementById("icon2").innerHTML = "<p id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></p>Whatsapp";
}
function addicon3fb(){
  document.getElementById("icon3").innerHTML = "<p class='zmdi zmdi-facebook-box' style='float: left;'></p>Facebook";
}
function addicon3em(){
  document.getElementById("icon3").innerHTML = "<p class='zmdi zmdi-email' style='float: left;'></p>E-Mail";
}
function addicon3ws(){
  document.getElementById("icon3").innerHTML = "<p id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></p>Whatsapp";
}
document.getElementById("defaultopen").click();
document.getElementById("b1").click();
document.getElementById("b5").click();
