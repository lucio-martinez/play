var player=function(){"use strict";var a={},b="http://0.0.0.0:3000/";return a.togglePlayPause=function(){$.get(b+"play_pause")},a.play=function(){$.get(b+"play")},a.pause=function(){$.get(b+"pause")},a.next=function(){$.get(b+"next")},a.previous=function(){$.get(b+"previous")},a.volumeUp=function(){$.get(b+"up")},a.volumeDown=function(){$.get(b+"down")},a.enableRepeat=function(){$.get(b+"enable_repeat")},a.disableRepeat=function(){$.get(b+"disable_repeat")},a.enableShuffle=function(){$.get(b+"enable_shuffle")},a.disableShuffle=function(){$.get(b+"disable_shuffle")},a.quit=function(){$.get(b+"quit")},a.systemVolumeUp=function(){$.get(b+"system_up")},a.systemVolumeDown=function(){$.get(b+"system_down")},a.getArtist=function(a){$.get(b+"artist",a)},a.getTrack=function(a){$.get(b+"track",a)},a}(),controller=function(){"use strict";function a(a){$("#artist").html(a)}function b(a){$("#track").html(a)}function c(){player.getArtist(a),player.getTrack(b)}function d(){void 0===e&&(e=setInterval(function(){c()},g))}var e,f={},g=5e3;return f.play=function(){player.play(),d()},f.togglePlayPause=function(){player.togglePlayPause(),d()},f.turnOffPlayer=function(){player.quit(),clearInterval(e),e=void 0,$("#artist").html(""),$("#track").html("")},c(),d(),f}();$("#play-pause").click(controller.togglePlayPause),$("#play").click(controller.play),$("#pause").click(player.pause),$("#next").click(player.next),$("#previous").click(player.previous),$("#down").click(player.volumeDown),$("#up").click(player.volumeUp),$("#enable-repeat").click(player.enableRepeat),$("#disable-repeat").click(player.disableRepeat),$("#enable-shuffle").click(player.enableShuffle),$("#disable-shuffle").click(player.disableShuffle),$("#system-down").click(player.systemVolumeDown),$("#system-up").click(player.systemVolumeUp),$("#quit").click(controller.turnOffPlayer);