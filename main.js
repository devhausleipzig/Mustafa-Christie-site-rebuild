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
const btnIcon = document.getElementById("iconTest");
const container = document.querySelector(".container");
    btn.addEventListener("click", function onClick(event) {
	btnIcon.classList.toggle("fa-moon");
	btnIcon.classList.toggle("fa-sun");
    if (container.classstyle.background !== "blanchedalmond") {
        container.style.background = "blanchedalmond";
    } else {
            container.style.background = "gray";
    }

});

// const btn = document.getElementById("nightModeButton");
// const btnIcon = document.getElementById("iconTest");
// const container = document.querySelector(".container");
//     btn.addEventListener("click", function onClick(event) {
// 	btnIcon.classList.toggle("fa-moon");
// 	btnIcon.classList.toggle("fa-sun");
//     container.classList.toggle('containerLight');
//     container.classList.toggle('containerDark');

// });

// const button2 = document.querySelector(".bt");
// button2.addEventListener("click", function onClick(event){
//     Container.style.background = '#eceeee'
//     container.style.color = 'white'
// })