function openbar(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
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
  document.getElementById("icon1").innerHTML = "<i class='zmdi zmdi-facebook-box' style='float: left;'></i>Facebook";
}
function addicon1em(){
  document.getElementById("icon1").innerHTML = "<i class='zmdi zmdi-email' style='float: left;'></i>E-Mail";
}
function addicon1ws(){
  document.getElementById("icon1").innerHTML = "<i id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></i>Whatsapp";
}
function addicon2fb(){
  document.getElementById("icon2").innerHTML = "<i class='zmdi zmdi-facebook-box' style='float: left;'></i>Facebook";
}
function addicon2em(){
  document.getElementById("icon2").innerHTML = "<i class='zmdi zmdi-email' style='float: left;'></i>E-Mail";
}
function addicon2ws(){
  document.getElementById("icon2").innerHTML = "<i id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></i>Whatsapp";
}
function addicon3fb(){
  document.getElementById("icon3").innerHTML = "<i class='zmdi zmdi-facebook-box' style='float: left;'></i>Facebook";
}
function addicon3em(){
  document.getElementById("icon3").innerHTML = "<i class='zmdi zmdi-email' style='float: left;'></i>E-Mail";
}
function addicon3ws(){
  document.getElementById("icon3").innerHTML = "<i id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></i>Whatsapp";
}
document.getElementById("defaultopen").click();
document.getElementById("b1").click();
document.getElementById("b5").click();
