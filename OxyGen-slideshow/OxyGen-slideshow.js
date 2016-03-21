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
		title = $('#content-title{$slideUnique}'),
		caption = $('#content-caption{$slideUnique}'),
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
}
var interval = 1;
setInterval(function(){
	if(interval == 3){
		$('#nav_content').fadeOut(2000);
		interval = 1;
	}
	interval = interval+1;
},1000);

$(document).bind('mousemove keypress', function() {
	$('#nav_content').fadeIn(2000);
	interval = 1;
});
