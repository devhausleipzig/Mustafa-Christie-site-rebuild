audioElement = new Audio("audio/Makaih Beats - Reflection.mp3");
audioElement.addEventListener(
	"canplay",
	function () {
		audioElement.play();
	},
	false
);
audioElement.addEventListener(
	"ended",
	function () {
		this.currentTime = 0;
		this.play();
	},
	false
);

const playButton = document.querySelector("#playButton");
let playing = true;
playButton.addEventListener("click", function () {
	if (playing) {
		audioElement.pause();
	} else {
		audioElement.play();
	}
	playing = !playing;
});

// const playButton = document.querySelector("#playButton");

// playButton.addEventListener("click", togglePlay());

// function togglePlay() {
// 	if (playButton.classList.contains("fa-circle-pause")) {
// 		// playButton.classList.remove("fa-circle-pause");
// 		playButton.classList.toggle("fa-circle-play");
// 		console.log("is paused");
// 		audioElement.pause();
// 	} else {
// 		// playButton.classList.remove("fa-circle-play");
// 		playButton.classList.toggle("fa-circle-pause");
// 		audioElement.play();
// 		console.log("resumed");
// 	}
// }
