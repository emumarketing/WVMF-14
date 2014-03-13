$(document).ready(function() {
	console.log('ready');
	$('#bandlist a').click(function() {
		console.log('click!');
		// hide anything else in there
		$('.profiles div').animate({'opacity':'0'});

		// show the band clicked
		bandName = this.className;
		console.log('Searching for .profiles div.'+bandName);
		$('.profiles div.' + bandName).stop().animate({'opacity':'1'}); 	
	});	
});
