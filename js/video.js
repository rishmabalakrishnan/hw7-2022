var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.loop = false;
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime += 10 <= video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("inside volume fxn");
	video.volume = this.value / 100;
	volDisplay = document.querySelector("#volume");
	volDisplay.innerHTML = (video.volume * 100) + '%';
});

// document.querySelector("#")
