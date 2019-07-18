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

});
