// $('.nav-link, .navbar-brand, .new-button').click(function() {
//     var sectionTo = $(this).attr('href');
//     $('html, body').animate({
//         scrollTop: $(sectionTo).offset().top + 10
//     }, 1000);
// });

// Cache selectors
var lastId,
    navMenu = $(".nav-menu"),
    navMenuHeight = navMenu.outerHeight()-45,
    // All list items
    menuItems = navMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-navMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 250);
  e.preventDefault();
});

function verifyCaptcha() {
    var registerBtn = document.querySelector('#btn-Enviar');
    registerBtn.removeAttribute('disabled');
}

$(document).ready(function () {  
    $('#btn-Enviar').click(function () {  

        $('#alertInfo').show('fade');
        
        // $.ajax({  
        //     type: 'GET',  
        //     url: 'services/api/values',  
        //     dataType: 'json',  
        //     success: function (data) {  
        //         $('#alertInfo').removeClass('hidden');
        //         if (data == true) {
        //             $('#alertInfo').addClass('alert-success');
        //             alert('E-mail enviado com sucesso.');
        //         }
        //         else {
        //             $(".alert").hide().show('medium');
        //             // alert('O e-mail não pode ser enviado.')
        //         }
        //     }
            
        // });  

    });  

    $('btnClear').click(function () {  
        ulEmployeess.empty();  
    });  

});  