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
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);} 
