Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
		{
			"name": "Yesterday",
			"artist": "Fontaine",
			"album": "",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/vc_auto/v1562049190/chillfiltr%20mp3/Fontaine_Yesterday_opuf42.mp3",
			"cover_art_url": "https://chillfiltr.com/content/images/size/w2000/2019/07/36335980_10214437544345127_5235113402048708608_n.jpg"
		},
		{
			"name": "Young Fools",
			"artist": "Small Million",
			"album": "",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/vc_auto/v1562136114/chillfiltr%20mp3/03_Young_Fools_mmolfh.mp3",
			"cover_art_url": "https://chillfiltr.com/content/images/size/w2000/2019/07/small-millions.jpg"
		},
		{
			"name": "Landslide",
			"artist": "The king heat ensemble",
			"album": "",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/vc_auto/v1563044999/chillfiltr%20mp3/1547214741908_f0dtsq.mp3",
			"cover_art_url": "https://chillfiltr.com/content/images/size/w2000/2019/07/1547814787489.jpg"
		},
		{
			"name": "Happier Now",
			"artist": "Luke Enyeart",
			"album": "",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/vc_auto/v1563041775/chillfiltr%20mp3/ref_6_Happier_Now_dro7qx.mp3",
			"cover_art_url": "https://chillfiltr.com/content/images/size/w2000/2019/07/IMG_0260-copy.jpg"
		},
		{
			"name": "Destiny",
			"artist": "Copilot",
			"album": "",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/vc_auto/v1563206779/chillfiltr%20mp3/1551763215061_281_29_bou4ko.mp3",
			"cover_art_url": "https://chillfiltr.com/content/images/size/w2000/2019/07/destiny-copy.jpg"
		}
    ],
	shuffle_on: true
  });

  window.onkeydown = function(e) {
      return !(e.keyCode == 32);
  };

  /*
    Handles a click on the song played progress bar.
  */
  document.getElementById('song-played-progress').addEventListener('click', function( e ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  });