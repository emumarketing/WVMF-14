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
});

$(function() {
    $('a.popper').click(function(e) {
        var target = '#' + ($(this).attr('data-popbox'));

        $('.popboxSM').hide();
        $('.popbox').hide();


        $(target).show('#');

        e.preventDefault();
    });
});

