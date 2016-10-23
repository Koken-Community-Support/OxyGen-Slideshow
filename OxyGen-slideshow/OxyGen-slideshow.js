pulse{$slideUnique}.on( 'start', function() {
	$('#sldshw-play{$slideUnique}').addClass('waiting');
	playState{$slideUnique}(pulse{$slideUnique}.options.autostart);
});
pulse{$slideUnique}.on( 'dataloaded', function() {
	$('#sldshw-play{$slideUnique}').removeClass('waiting');
});
pulse{$slideUnique}.on( 'playing', function(isPlaying) {
	playState{$slideUnique}(isPlaying);
});
pulse{$slideUnique}.on( 'transitionstart', function(e) {
	var data = e.data,
		title = $('#{$slideUnique}_title'),
		caption = $('#{$slideUnique}_caption'),
		link = $('#content-link{$slideUnique}');
	link.attr("href", data.url);
	if (data.title.length > 1 ) {
		title.html( data.title );
	} else {
		title.html( data.filename );
	}
	link.attr("title", data.title || data.filename );
	if (data.caption.length > 1) {
		caption.html( data.caption );
	} else {
		caption.html( '&nbsp;' );
	}
	$('#sldshw-play{$slideUnique}').removeClass('waiting');
});
pulse{$slideUnique}.on( 'waiting', function() {
	$('#sldshw-play{$slideUnique}').addClass('waiting');
});
function playState{$slideUnique}(playing) {
	var el = $('#sldshw-play{$slideUnique}');
	if (playing) {
		el.html('{{ language.pause }}');
	} else {
		el.html('{{ language.play }}');
	}
};
$(document).ready(function() {
//The page is "ready" and the document can be manipulated.
	if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
		//If the device is a touch capable device, then...
		$(document).on("touchstart", "a", function() {
			//Do something on tap.
		});
	} else {
		var interval = 1;
		setInterval(function(g){
			if(interval == 5){
				$('#nav_content').fadeOut(2000, function(h){
					$('#nav_content').css({"display": "block","visibility": "hidden"});
					interval = 1;
				});
			}
			interval = interval+1;
		},1000);
		$(document).bind('mousemove keypress', function(i) {
			$('#nav_content').fadeIn(2000, function(j){
				$('#nav_content').css({"visibility": "visible"});
				interval = 1;
			});
		});
	}
});
