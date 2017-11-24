var player;
var mute = 1;

$( document ).ready(function(){
});

// LOADS VIDEO
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    videoId: 'YvM-pnzRDYE', // YouTube Video ID
    width: 560,               // Player width (in px)
    height: 316,              // Player height (in px)
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 0,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 0,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 0,              // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0,         // Hide video controls when playing
  		start: 3
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
 }


// MOVES ABOUT WINDOW WAY OFF SCREEN
function clearwindow() {
	$('.about-window-container').css("top","-1500px");
}

// WHEN YOU CLICK ABOUT BUTTON
$('.about').click(function() {
	$('.about-window-container').toggleClass("open");
	// GET CURRENT HEIGHT OF WINDOW
	var divheight = $('.about-window').outerHeight();
	
	// IF THE CLASS "OPEN" HAS BEEN ADDED THEN OPEN THE ABOUT WINDOW
	// ELSE CLOSE IT AND RUN FUNCTION *CLEARWINDOW*
	if ($('.about-window-container').hasClass("open")) {
		$('.about-window-container').css("top",-divheight);
		$('.about-window-container').animate({'top':0},500);
	} else {
		$('.about-window-container').animate({'top':-divheight},500);
		setTimeout(clearwindow, 550);
	}
});

// WHEN YOU CLICK MOOD BUTTON
$('.mood').click(function() {
	setTimeout(player.playVideo(), 200);
	if (mute == 0) {
		player.mute();
		mute = 1;		
	} else {
		player.unMute();
		mute = 0;
	}
	$('#ytplayer').toggle();
	// $('.moodtext').toggleClass('moodactive');
})

// RUNS FUNCTION WHICH COMBINES AND DISPLAYS NAME
$('.container-item').click(function() {
	combine();
	displayname();
});

// DISPLAYS THE NAME
function displayname() {
	$('.name').html(first + " " + last);
}

// NAME COMPONENT LIST

var first;
var last;

var firstname = [
	"fred",
	"francis",
	"jasper",
	"ron",
	"james",
	"ace",
	"aidan",
	"bill",
	"clarence",
	"george",
	"benjamin",
	"tom",
	"eggbert",
	"jack",
	"sam",
	"dave",
	"floyd",
	"jesse",
	"eddie",
	"norman",
	"george",
	"everett",
	"horace",
	"hubert",
	"otis",
	"roosevelt",
	"warren",
	"earnest",
	"wesley",
	"lance",
	"dewey",
	"rufus",
	"glen",
	"bert",
	"cliff",
	"amos",
	"clayton",
	"roscoe",
	"ira",
	"fischer",
	"brian",
	"pete",
	"adler",
	"ruth",
	"florence",
	"ethel",
	"lillian",
	"rose",
	"bertha",
	"hazel",
	"bessie",
	"mable",
	"pearl",
	"edith",
	"esther",
	"myrtle",
	"agnes",
	"violet",
	"ruby",
	"ida",
	"cheryl",
	"alma",
	"willie",
	"mamie",
	"eleanor",
	"maggie",
	"dora",
	"betty",
	"opal",
	"hilda",
	"flora",
	"nettie",
	"eunice",
	"genevieve",
	"mable",
	"eula",
	"lizzie",
	"harriet",
	"jane",
	"wilma",
	"irma",
	"flossie",
	"fern",
	"geraldine",
	"adeline",
	"bonnie",
	"fern",
	"brook",
	"bark",
	"birdie",
	"moss",
	"branch",
	"root",
	"herb",
	"shroom",
	"berry",
	"shrub",
	"ivy",
	"brush",
	"juniper",
	"oak",
	"maple",
	"green",
	"sky",
	"nut",
	"seed",
	"soil",
	"sprout",
	"peak",
	"vine",
	"rose",
	"daisy",
	"buttercup",
	"pond",
	"lilly",
	"toad",
	"river",
	"creek",
	"eagle",
	"crow",
	"sparrow",
	"raven",
	"claw",
	"hawk",
	"talon",
	"antler",
	"hoof",
	"fur",
	"pelt",
	"wing",
	"feather",
	"beak",
	"trout",
	"salmon",
	"sun",
	"moon",
	"dawn",
	"birch",
	"aspen",
	"acacia",
	"autumn",
	"summer",
	"spring",
	"blossom",
	"ridge",
	"gaia",
	"genesis",
	"meadow",
	"mist",
	"fog",
	"dew",
	"rain",
	"sequoia",
	"willow",
	"terra",
	"blaze",
	"dale",
	"valley",
	"eco",
	"fox",
	"thorn",
	"spruce",
	"reed",
	"vale"
];

var lastname_nature = [
	"fern",
	"brook",
	"bark",
	"birdie",
	"moss",
	"branch",
	"root",
	"herb",
	"shroom",
	"berry",
	"shrub",
	"ivy",
	"brush",
	"juniper",
	"oak",
	"maple",
	"green",
	"sky",
	"nut",
	"seed",
	"soil",
	"sprout",
	"peak",
	"vine",
	"rose",
	"daisy",
	"buttercup",
	"pond",
	"lilly",
	"toad",
	"river",
	"creek",
	"eagle",
	"crow",
	"sparrow",
	"raven",
	"claw",
	"hawk",
	"talon",
	"antler",
	"hoof",
	"fur",
	"pelt",
	"wing",
	"feather",
	"beak",
	"trout",
	"salmon",
	"sun",
	"moon",
	"dawn",
	"birch",
	"aspen",
	"acacia",
	"autumn",
	"summer",
	"spring",
	"blossom",
	"ridge",
	"gaia",
	"genesis",
	"meadow",
	"mist",
	"fog",
	"dew",
	"rain",
	"sequoia",
	"willow",
	"terra",
	"blaze",
	"dale",
	"valley",
	"fox",
	"thorn",
	"spruce",
	"reed",
	"vale"
];

var lastname_name_prefix = [
	"chuck",
	"rose",
	"lilly",
	"bern",
	"moss",
	"jones",
	"craw",
	"el",
	"carl",
];

var lastname_name_affix = [
	"m<span class=lowercase>c</span>",
	"mac",
	"van",
	"della",
	"eco",
	"von",
	"o&rsquo;",
	"l<span class=lowercase>e</span>",
	"l<span class=lowercase>a</span>"
];

var lastname_name_suffix = [
	"son",
	"trap",
	"sky",
	"vich",
	"stein",
	"berry",
	"bury",
	"soil",
	"dust",
	"man",
	"er",
	"ly",
	"ham",
	"berg",
	"claw",
	"smith",
	"ton",
	"fir",
	"fern",
	"baum"
];


// GENERATES NAME

// FIRST NAME
// nature (eagle)
// 1. Ranger names (female / male)
// 2. Nature

// LAST NAME
// 1. prefix name + nature (chuckbird)
// 2. nature + name suffix (riverson)

function combine() {
	first = firstname[Math.floor(Math.random()*firstname.length)]; 

	lastname_structure = Math.floor(Math.random()*3);
	
	if (lastname_structure == 0) {
		a = lastname_name_affix[Math.floor(Math.random()*lastname_name_affix.length)];
		b = lastname_nature[Math.floor(Math.random()*lastname_nature.length)];
		last = (a + '<span class="firstcap">' + b + '</span>');
	} else if (lastname_structure == 1){ 
		a = lastname_name_prefix[Math.floor(Math.random()*lastname_name_prefix.length)];
		b = lastname_nature[Math.floor(Math.random()*lastname_nature.length)];
		last = (a + b);
	} else if (lastname_structure == 2) {
		a = lastname_nature[Math.floor(Math.random()*lastname_nature.length)];
		b = lastname_name_suffix[Math.floor(Math.random()*lastname_name_suffix.length)];
		last = (a + b);
	};
};