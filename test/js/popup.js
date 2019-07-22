$(function()
{

    $('.linkicon').on('click', function(event) 
    { 
        var type = 'dark';
        var message = 'Link copied'

        
        var alertType = 'alert-'+ type
        
       // alert('alert type is: '+ alertType);
        
        var htmlAlert = '<div class="alert '+ alertType +'" style="background-color: black;"><p style="color: white;">'+ message +'</p></div>';
        
       // alert(htmlAlert);
        
        $(".alert-message").prepend(htmlAlert);
        
        $(".alert-message .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });

    });
    AColorPicker.from('.picker')
    .on('change', (picker, color) => {
      $('#colorbox').css('background-color', color);
      $('#colorbox2').css('background-color', color);
    });
    $("#b1").click(function(){     
      if ($("#i2").hasClass("iup")) {
        document.getElementById("b2").click();
      }
      if ($("#i3").hasClass("iup")) {
        document.getElementById("b3").click();
      }
      if ($("#i4").hasClass("iup")) {
        document.getElementById("b4").click();
      }
      if ($("#i1").hasClass("iup")) {
        $("#i1").toggleClass("idown iup");
      }
      else{
        $("#i1").toggleClass("idown iup");
      }
    });
    $("#b2").click(function(){
      if ($("#i1").hasClass("iup")) {
        document.getElementById("b1").click();
      }
      if ($("#i3").hasClass("iup")) {
        document.getElementById("b3").click();
      }
      if ($("#i4").hasClass("iup")) {
        document.getElementById("b4").click();
      }
      if ($("#i2").hasClass("iup")) {
        $("#i2").toggleClass("idown iup");
      }
      else{
        $("#i2").toggleClass("iup idown");
      }
    });
    $("#b3").click(function(){
      if ($("#i1").hasClass("iup")) {
        document.getElementById("b1").click();
      }
      if ($("#i2").hasClass("iup")) {
        document.getElementById("b2").click();
      }
      if ($("#i4").hasClass("iup")) {
        document.getElementById("b4").click();
      }
      if ($("#i3").hasClass("iup")) {
        $("#i3").toggleClass("idown iup");
      }
      else{
        $("#i3").toggleClass("iup idown");
      }
    });
    $("#b4").click(function(){
      if ($("#i1").hasClass("iup")) {
        document.getElementById("b1").click();
      }
      if ($("#i2").hasClass("iup")) {
        document.getElementById("b2").click();
      }
      if ($("#i3").hasClass("iup")) {
        document.getElementById("b3").click();
      }
      if ($("#i4").hasClass("iup")) {
        $("#i4").toggleClass("idown iup");
      }
      else{
        $("#i4").toggleClass("iup idown");
      }
    });
});

