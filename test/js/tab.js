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
document.getElementById("defaultopen").click();
document.getElementById("b1").click();
document.getElementById("b5").click();
