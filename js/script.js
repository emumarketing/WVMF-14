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
    var moveLeft = 0;
    var moveDown = 0;
    $('a.popper').hover(function(e) {
   
        var target = '#' + ($(this).attr('data-popbox'));
         
        $(target).show();
        moveLeft = $(this).outerWidth();
        moveDown = ($(target).outerHeight() / 2);
    }, function() {
        var target = '#' + ($(this).attr('data-popbox'));
        $(target).hide();
    });
 
    $('a.popper').mousemove(function(e) {
        var target = '#' + ($(this).attr('data-popbox'));
         
        leftD = e.pageX + parseInt(moveLeft);
        maxRight = leftD + $(target).outerWidth();
        windowLeft = $(window).width() - 40;
        windowRight = 0;
        maxLeft = e.pageX - (parseInt(moveLeft) + $(target).outerWidth() + 20);
         
        if(maxRight > windowLeft && maxLeft > windowRight)
        {
            leftD = maxLeft;
        }
     
        topD = e.pageY - parseInt(moveDown);
        maxBottom = parseInt(e.pageY + parseInt(moveDown) + 20);
        windowBottom = parseInt(parseInt($(document).scrollTop()) + parseInt($(window).height()));
        maxTop = topD;
        windowTop = parseInt($(document).scrollTop());
        if(maxBottom > windowBottom)
        {
            topD = windowBottom - $(target).outerHeight() - 20;
        } else if(maxTop < windowTop){
            topD = windowTop + 20;
        }
     
        $(target).css('top', topD).css('left', leftD);
    });
});

