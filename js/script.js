$(document).ready(function() {
  // Bind click listeners to band list
	$('#bandlist a').click(function() {
		console.log('click!');

		// hide anything else in there
		$('.profiles div').animate({'opacity':'0'});

		// show the band clicked
		bandName = this.className;
		$('.profiles div.' + bandName).stop().animate({'opacity':'1'}); 	
	});

  //Smooth Scrolling
  $(".scroll").click(function (event) {
    event.preventDefault();
    //calculate destination place
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
    } else {
        dest = $(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({
        scrollTop: dest
    }, 500, 'swing');
});

  // Initialize goog map
  mapInit();
});

function mapInit() {
  var mapOptions = {
                    center: new google.maps.LatLng(44.043304,-123.074577),
                    zoom: 16,
                    scrollwheel: false
                   };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var mainStage = new google.maps.Marker({
    position: new google.maps.LatLng(44.04572,-123.077608),
    map: map,
    title:"Main Stage"
	});

  var amphitheater = new google.maps.Marker({
    position: new google.maps.LatLng(44.045331,-123.074234),
    map: map,
    title:"Amphitheater"
	});

  var fishBowl = new google.maps.Marker({
    position: new google.maps.LatLng(44.04496,-123.073972),
    map: map,
    title:"Fish Bowl Workshops"
	});

  var buzz = new google.maps.Marker({
    position: new google.maps.LatLng(44.044829,-123.074027),
    map: map,
    title:"The Buzz"
	});

  var taylorLounge = new google.maps.Marker({
    position: new google.maps.LatLng(44.045055,-123.073827),
    map: map,
    title:"Taylor Lounge"
	});

  var collierLawn = new google.maps.Marker({
    position: new google.maps.LatLng(44.045232,-123.074943),
    map: map,
    title:"Collier Lawn"
	});
} 

$(function() {
    $('a.popper').click(function(e) {
        var target = '#' + ($(this).attr('data-popbox'));

        $('.popboxSM').hide();
        $('.popbox').hide();

        
        $(target).show('#');

        e.preventDefault();
    });
});

var meny = Meny.create({
    // The element that will be animated in from off screen
    menuElement: document.querySelector( '.nav' ),

    // The contents that gets pushed aside while Meny is active
    contentsElement: document.querySelector( '.fullpagewrapper' ),

    // The alignment of the menu (top/right/bottom/left)
    position: 'left',

    // The height of the menu (when using top/bottom position)
    height: 200,

    // The width of the menu (when using left/right position)
    width: 260,

    // The mouse distance from menu position which can trigger menu to open.
    threshold: 40,

    // Width(in px) of the thin line you see on screen when menu is in closed position.
    overlap: 6,

    // The total time taken by menu animation.
    transitionDuration: '0.5s',

    // Transition style for menu animations
    transitionEasing: 'ease',

    // Use mouse movement to automatically open/close
    mouse: true,

    // Use touch swipe events to open/close
    touch: true
});

