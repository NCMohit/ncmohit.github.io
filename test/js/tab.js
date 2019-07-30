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
function uploadplus(){
  document.getElementById('fileupload2').click();
}
function startshine(){
  document.getElementById("colorbox").classList.add("shine");
  document.getElementById("colorbox2").classList.add("shine");
  document.getElementById("effectmain").classList.add("shine");
  document.getElementById("effectmain").innerHTML = "Shine<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
  document.getElementById("ishine").classList.add("arrow idown");
}
function removeeffect(){
  document.getElementById("colorbox").classList.remove("shine");
  document.getElementById("colorbox2").classList.remove("shine");
  document.getElementById("effectmain").classList.remove("shine");
  document.getElementById("effectmain").innerHTML = "None<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon1fb(){
  document.getElementById("icon1").innerHTML = "<p class='zmdi zmdi-facebook-box' style='float: left;'></p>Facebook<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon1em(){
  document.getElementById("icon1").innerHTML = "<p class='zmdi zmdi-email' style='float: left;'></p>E-Mail<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon1ws(){
  document.getElementById("icon1").innerHTML = "<p id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></p>Whatsapp<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon2fb(){
  document.getElementById("icon2").innerHTML = "<p class='zmdi zmdi-facebook-box' style='float: left;'></p>Facebook<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon2em(){
  document.getElementById("icon2").innerHTML = "<p class='zmdi zmdi-email' style='float: left;'></p>E-Mail<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon2ws(){
  document.getElementById("icon2").innerHTML = "<p id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></p>Whatsapp<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon3fb(){
  document.getElementById("icon3").innerHTML = "<p class='zmdi zmdi-facebook-box' style='float: left;'></p>Facebook<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon3em(){
  document.getElementById("icon3").innerHTML = "<p class='zmdi zmdi-email' style='float: left;'></p>E-Mail<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon3ws(){
  document.getElementById("icon3").innerHTML = "<p id='test1' class='zmdi zmdi-whatsapp' style='float: left;'></p>Whatsapp<span class='fa fa-caret-down' style='float: right;color: gray;'></span>";
}
function addicon4none(){
  document.getElementById("icon4").innerHTML = "None";
}
function addicon4b1(){
  document.getElementById("icon4").innerHTML = "Button 1";
}
function showcircle(){
  document.getElementById("dragcircle").style.display = 'block';
  document.getElementById("circlerow").style.display = 'block';
  document.getElementById("circlecolor").style.display = 'block';
}
function showsqr(){
  document.getElementById("dragsqr").style.display = 'block';
  document.getElementById("sqrrow").style.display = 'block';
  document.getElementById("sqrcolor").style.display = 'block';
}
function showtr(){
  document.getElementById("dragtri").style.display = 'block';
  document.getElementById("trirow").style.display = 'block';
  document.getElementById("tricolor").style.display = 'block';
  document.getElementById("trisize").style.display = 'block';
}
function setcirclecolor(picker) {
  document.getElementById("abc").style.border = '3px solid ' + '#' + picker.toString()
}
function setsqrcolor(picker) {
  document.getElementById("abc2").style.border = '3px solid ' + '#' + picker.toString()
}
function settricolor(picker) {
  document.getElementById("abc3").style.color = '#' + picker.toString()
}
function setboxcolor(picker) {
  document.getElementById("colorbox").style.backgroundColor = '#' + picker.toString();
  document.getElementById("colorbox2").style.backgroundColor = '#' + picker.toString();
}
document.getElementById("defaultopen").click();
document.getElementById("b1").click();
document.getElementById("b5").click();
document.getElementById("b8").click();
