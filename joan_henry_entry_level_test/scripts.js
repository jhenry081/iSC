var video = document.getElementById("video");

video.oncanplaythrough = function() {
    //alert("You can now play the video without buffering");
};

video.onplaying = function() {
    //alert("The video has started playing");
};

video.onseeking = function() {
    //alert("Stop skipping the video :)");
};

video.onended = function() {
    wrapper.classList.remove('video-playing');
    //alert("The video has now ended");
};