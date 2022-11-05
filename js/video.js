var video = document.querySelector("#player1");

// page load: initialize the video element and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.loop = false;
	video.autoplay = false;
});

// play button: play the video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + '%';
});

// pause button: pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down button: slow the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// speed up button: increase the current video speed each time the button is clicked and log the new speed to the console. change it by an amount proportional to the slow down
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// skip ahead button: advance the current video by 10 seconds. if the video length has been exceeded, go back to the start of the video. log the current location of the video
document.querySelector("#skip").addEventListener("click", function() {
	if ((video.currentTime + 10) <= video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current location is " + video.currentTime);
});

// mute button: mute/unmute the video and update the text in the button
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

// volume slider: change the volume based on the slider and update the volume information
document.querySelector("#slider").addEventListener("click", function() {
	console.log("inside volume fxn");
	video.volume = this.value / 100;
	volDisplay = document.querySelector("#volume");
	volDisplay.innerHTML = (video.volume * 100) + '%';
});

// styled button: utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("#player1").classList.add("oldSchool");
});

// original button: remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("#player1").classList.remove("oldSchool");
});
