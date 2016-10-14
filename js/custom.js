$(document).ready(function(){


  // fixed nav menu
  // **************************

    $(window).scroll(function(){

    // fixed menu js 

     var scrollheight = parseInt(($(".site-header").height())/6);

      if( $(window).scrollTop() > scrollheight ) {
           $('.top-menu').addClass('sticky-nav');

          }
        else {
              $('.top-menu').removeClass('sticky-nav');
          }
    });   
    


     $('.back-to-top').hide();
     $('.back-to-top').on("click",function(e) {
     e.preventDefault();
     $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    
    $(window).scroll(function(){
      var scrollheight =400;
      if( $(window).scrollTop() > scrollheight ) {
           $('.back-to-top').fadeIn();

          }
        else {
              $('.back-to-top').fadeOut();
             }
     });


     $(' #mixit-container .idol-single-gallery ').each( function() { $(this).hoverdir(); } );


  $('.individual-service-section').hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover') }
    )

          $('#mixit-container').mixItUp();



    /*    responsive menu    */
          
        $('#detail-menu').on("click",function(e) {
        e.preventDefault();
        $('body').toggleClass('detail-menu-active');
        });

        $("#detail-menu").click(function () {
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });


          $('.menu-box-bg').on({
             click: function (){
             closeMenu();
             }  
           });


           function closeMenu(){
             $('body').removeClass('detail-menu-active');
           }


           $(".menu-box-bg").click(function () {
               $(".top-menu").toggleClass("top-animate");
               $(".mid-menu").toggleClass("mid-animate");
               $(".bottom-menu").toggleClass("bottom-animate");
           });

// Navigation Start
    $('.main-nav')
        .onePageNav({
          scrollSpeed: 750,
          scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
          scrollOffset: 45 //Height of Navigation Bar
    });

    
    $('.primary-menu ul li a')
            .click(function (e) {

                $(".main section")
                        .removeClass(" ");
                $($(this)
                        .attr('href'))
                        .addClass(' ');
                $(this)
                        .parent()
                        .parent()
                        .parent()
                        .removeClass('in');
            });


    

});