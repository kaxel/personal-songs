Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
		{
			"name": "East of Hollywood",
			"artist": "Krister Axel",
			"album": "Permanent Friday Night",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/v1579415068/old%20masters/top%205%20for%20steve%20berlin/Krister_Axel_-_East_of_Hollywood_hiqp16.mp3",
			"cover_art_url": "https://res.cloudinary.com/ashland-io-llc/image/upload/v1579413856/permanent-Friday-night_rtbdim.jpg"
		},
		{
			"name": "Holland Park Road",
			"artist": "Krister Axel",
			"album": "Arms Around the River",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/v1579414930/old%20masters/top%205%20for%20steve%20berlin/Krister_Axel_-_Holland_Park_Road_ht2cpq.mp3",
			"cover_art_url": "https://res.cloudinary.com/ashland-io-llc/image/upload/v1579413853/arms-around-the-river_mitt3p.jpg"
		},
		{
			"name": "Illuminate the Sky",
			"artist": "Krister Axel",
			"album": "Swexico",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/v1579414950/old%20masters/top%205%20for%20steve%20berlin/Krister_Axel_-_Swexico_-_02_Illuminate_The_Sky_lwvkao.mp3",
			"cover_art_url": "https://res.cloudinary.com/ashland-io-llc/image/upload/v1556664506/swexico-cover-hires_fcmwrh.jpg"
		},
		{
			"name": "I'm the Gun",
			"artist": "Krister Axel",
			"album": "At The Hotel Cafe in Hollywood (Live)",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/v1579414433/old%20masters/top%205%20for%20steve%20berlin/Krister_Axel_-_I_m_The_Gun_-_live_ab0bnm.mp3",
			"cover_art_url": "https://res.cloudinary.com/ashland-io-llc/image/upload/v1579413995/a0587439013_10_yzaypl.jpg"
		},
		{
			"name": "All For You",
			"artist": "Krister Axel",
			"album": "Sky Meet Sea",
			"url": "https://res.cloudinary.com/ashland-io-llc/video/upload/v1579414602/old%20masters/top%205%20for%20steve%20berlin/Krister_Axel_-_All_for_You_kaxgmj.mp3",
			"cover_art_url": "https://res.cloudinary.com/ashland-io-llc/image/upload/v1579414279/sky-meet-sea_httcy2.jpg"
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