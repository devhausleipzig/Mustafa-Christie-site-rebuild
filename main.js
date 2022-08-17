// const themeBtn = document.querySelector('#nightModeButton');

// function getCurrentTheme() {
//     let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     return theme;
// }

// function loadTheme(theme) {
//     const root = document.querySelector(':root');
//     if(theme === "light") {
//         themeBtn.innerHTML = `<i class="fa-light fa-moon"></i>`;
//     } else {
//         themeBtn.innerHTML = `<i class="fa-regular fa-sun-bright"></i>`;
//     }
//     root.setAttribute('color-scheme', `${theme}`);
// }

// themeBtn.addEventListener('click', () => {
//     let theme = getCurrentTheme()
//     if(theme === 'dark'){
//         theme = 'light';
//     } else {
//         theme = 'dark';
//     }
//     loadTheme(theme);
// })

// window.addEventListener('DOMContentLoaded', () => {
//     loadTheme(getCurrentTheme());
// })

// xxxxxxxxx
// const button=document.getElementById('nightModeButton')

// button.addEventListener('click',()=>{

// document.body.style.background('black')
// console.log(body.background)
// })
const btn = document.getElementById("nightModeButton");
const container = document.querySelector(".container");
    btn.addEventListener("click", function onClick(event) {
    if (container.style.background !== "blanchedalmond") {
        container.style.background = "blanchedalmond";
    } else {
            container.style.background = "gray";
    }

});

// const button2 = document.querySelector(".bt");
// button2.addEventListener("click", function onClick(event){
//     Container.style.background = '#eceeee'
//     container.style.color = 'white'
// })



//xxxxxxxxxxx CHRISTIE'S PART XXXXXXXXXXXX

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
