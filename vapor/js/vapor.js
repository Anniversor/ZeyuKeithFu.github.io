// playlist object
var playList = {
    0: new Howl({
        src: ['sounds/demo.mp3']
    }),
    1: new Howl({
        src: ['sounds/demo.mp3']
    }),
    2: new Howl({
        src: ['sounds/demo.mp3']
    }),
    3: new Howl({
        src: ['sounds/demo.mp3']
    }),
    4: new Howl({
        src: ['sounds/demo.mp3']
    }),
    5: new Howl({
        src: ['sounds/demo.mp3']
    }),
    length: 6
};

// Play function
$(".song").on("click", function (e) {
    var pos = $(this).index();
    var toPlay = playList[pos];
    stopSongs();
    $($(".fa-compact-disc")[pos]).toggleClass("playing");
    $($(".fa-stop-circle")[pos]).toggleClass("playing");
    toPlay.play();
    e.stopPropagation();
});

// Stop playing function
$(".fa-stop-circle").on("click", function (e) {
    stopSongs();
    e.stopPropagation();
});

function stopSongs() {
    for (var i = 0; i < playList.length; i++) {
        if (playList[i].playing()) {
            playList[i].stop();
            $($(".fa-compact-disc")[i]).toggleClass("playing");
            $($(".fa-stop-circle")[i]).toggleClass("playing");
        }
    }
}