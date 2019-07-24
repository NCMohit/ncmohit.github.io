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
    $("#b5").click(function(){     
      if ($("#i6").hasClass("iup")) {
        document.getElementById("b6").click();
      }
      if ($("#i7").hasClass("iup")) {
        document.getElementById("b7").click();
      }
      if ($("#i5").hasClass("iup")) {
        $("#i5").toggleClass("idown iup");
      }
      else{
        $("#i5").toggleClass("idown iup");
      }
    });
    $("#b6").click(function(){     
      if ($("#i5").hasClass("iup")) {
        document.getElementById("b5").click();
      }
      if ($("#i7").hasClass("iup")) {
        document.getElementById("b7").click();
      }
      if ($("#i6").hasClass("iup")) {
        $("#i6").toggleClass("idown iup");
      }
      else{
        $("#i6").toggleClass("idown iup");
      }
    });
    $("#b7").click(function(){     
      if ($("#i5").hasClass("iup")) {
        document.getElementById("b5").click();
      }
      if ($("#i6").hasClass("iup")) {
        document.getElementById("b6").click();
      }
      if ($("#i7").hasClass("iup")) {
        $("#i7").toggleClass("idown iup");
      }
      else{
        $("#i7").toggleClass("idown iup");
      }
    });
    $("#b8").click(function(){     
      if ($("#i9").hasClass("iup")) {
        document.getElementById("b9").click();
      }
      if ($("#i8").hasClass("iup")) {
        $("#i8").toggleClass("idown iup");
      }
      else{
        $("#i8").toggleClass("idown iup");
      }
    });
    $("#b9").click(function(){     
      if ($("#i8").hasClass("iup")) {
        document.getElementById("b8").click();
      }
      if ($("#i9").hasClass("iup")) {
        $("#i9").toggleClass("idown iup");
      }
      else{
        $("#i9").toggleClass("idown iup");
      }
    });
    interact('.resize-drag')
      .draggable({
        onmove: window.dragMoveListener,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          })
        ]
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },
        preserveAspectRatio: true,
        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
            outer: 'parent',
            endOnly: true
          }),

          // minimum size
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 }
          })
        ],

        inertia: true
      })
      .on('resizemove', function (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
      })
});

