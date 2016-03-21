<?php
	class ogSlideshow extends KokenPlugin {
		function __construct() {
			$this->register_shortcode('og_slideshow', 'render');
		}

		function render($attributes) {
			$slideUnique = md5(uniqid(rand(), true));
			return <<<HTML
<figure class="k-content-embed og-slideshow" id="{$slideUnique}_slideshow">
	<div class="k-content">
		<koken:pulse source="album" filter:id="{$attributes['album']}" jsvar="pulse{$slideUnique}" group="albums-{$slideUnique}" next="#sldshw-next{$slideUnique}" previous="#sldshw-prev{$slideUnique}" toggle="#sldshw-play{$slideUnique}" link_to="lightbox" />
		<ul class="og-slideshow nav-content" id="nav_content">
			<li class="sldshw-prev"><a href="#" id="sldshw-prev{$slideUnique}" title="{{ language.previous }}">&larr;&nbsp;</a>
			<li class="sldshw-play"><a href="#" id="sldshw-play{$slideUnique}" title="Toggle" data-bind-to-key="space">Loading</a>
			<li class="sldshw-next"><a href="#" id="sldshw-next{$slideUnique}" title="{{ language.next }}">&nbsp;&rarr;</a>
		</ul>
	</div>
	<figcaption id="{$slideUnique}_text" class="k-content-text">
		<span id="{$slideUnique}_title" class="k-content-title">&nbsp;</span>
		<span id="{$slideUnique}_caption" class="k-content-caption">&nbsp;</span>
	</figcaption>
	<script>
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
	</script>
</figure>
HTML;
		}

	}
