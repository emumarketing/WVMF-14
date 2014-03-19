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

  // Initialize goog map
  mapInit();
});

function mapInit() {
  var mapOptions = {
                    center: new google.maps.LatLng(44.043304,-123.074577),
                    zoom: 16
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

