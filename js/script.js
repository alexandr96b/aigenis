$(document).ready(function () {


$('.b-services-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false,
  dots: true,
  autoplay: true,
  adaptiveHeight: true,
  infinite: true,
  variableWidth: false
});

$('.b-team-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: true,
  dots: false,
  autoplay: true,
  infinite: true,
  variableWidth: false
});

$('.b-desc-bottom__right').click(function(){
  $('.b-desc-container').slideToggle('active');
  $('.b-desc-bottom__right').toggleClass('active');
}); 

// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init2);

function init2() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 18,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(53.939724, 27.478781), // ZP

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
    position: new google.maps.LatLng(53.939724, 27.478781),
    map: map,
    title: 'Snazzy!',
            icon: {
        url: "images/map-ico.png",
        scaledSize: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(40, 80)
    }

    }); 
}

$('.menu-icon').click(function(){
  $('.b-header-content__wrap__wrapper , body').toggleClass('active');

}); 

$(document).on('click', function(event) {
  if (!$(event.target).closest(".menu-icon , .b-header-content__wrap").length) {
    $('.b-header-content__wrap__wrapper , body').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  event.stopPropagation();
});

$('.xs-close').click(function(){
  $('.b-header-content__wrap__wrapper , body').toggleClass('active');
  $('.xs-close').toggleClass('active');
}); 

$(".btn-up").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 830){
        $('.btn-up').addClass('active');
     } else if(scrolledpx < 831){
      $('.btn-up').removeClass('active');
     }

 

  });





function moveMenu2(){
  if ($(window).width() < 768) {
         $(function(){ 
            $('.b-partners-row').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: false,
              arrows: false,
              dots: false,
              autoplay: true,
              infinite: true,
              centerMode: true,
              variableWidth: true
            });

        })            
  } else{
    $('.b-partners-row').slick("unslick");
         $(function(){ 



           
     })        
  }
}
moveMenu2();

$(window).resize(function(){
    moveMenu2();
});


});


