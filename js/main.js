const bodyEl = document.querySelector('body');
const container = document.querySelector('.intro');
const mainCon = document.querySelector('.main-container');
const heading = document.querySelector('.intro-text');
const switchContainer = document.querySelector('.switch');
const switchBtn = document.querySelector('.switch-btn');
const switchLbl = document.querySelector(".switch-label");
const fogEl = document.querySelector(".fog");
const skillEl = document.querySelector(".skills");
const skillSetEl = document.querySelector(".skillset");
const toolEl = document.querySelector(".tools");
const toolSetEl = document.querySelector(".toolset");
const transcribeEl = document.getElementById('transcriber');
const recipeEl = document.getElementById('recipe');
const pinporkEl = document.getElementById('pinpork');
const machineEL = document.getElementById('machine');
const projectEl = document.querySelectorAll('.project');
const description = document.querySelectorAll('.description');

let introRead = true;
let xPos = 0;

const reminder = document.createElement('div');
reminder.classList.add('reminder');
reminder.innerHTML = `
<h2>Please turn on the light.</h2>
`;

switchContainer.addEventListener('click', () => {
  if (introRead) {
    mainCon.classList.remove('active');
    switchContainer.classList.add('switch-on');
    fogEl.classList.add('light-on');
    heading.innerHTML = `
      Scroll down. <i class="fa-solid fa-arrow-down"></i>
    `;
    switchContainer.classList.add('active-switch');
    introRead = false;
    fogEl.style.opacity = "0";
    heading.classList.remove('text-null')
  } else {
    switchContainer.classList.remove('switch-on');
    fogEl.classList.remove('light-on');
    heading.innerText = "Please turn on the light.";
    switchContainer.classList.remove('active-switch');
    introRead = true;
    heading.style.transform = `translateX(0px)`;
    heading.classList.add('text-null');
    xPos = 0;
    fogEl.style.opacity = "1";
  }
});

fogEl.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  fogEl.style.background = `radial-gradient(350px at ${x}px ${y}px, transparent, rgba(0, 0, 0, 0.488), black, black)`;
});

// reminder.addEventListener("mousemove", (e) => {
//   let x = e.clientX;
//   let y = e.clientY;

//   reminder.style.background = `radial-gradient(350px at ${x}px ${y}px, transparent, rgba(0, 0, 0, 0.488), black, black)`;
// });


// Algorithm for moving an element using scroll
// container.addEventListener('wheel', (e) => {
//   if (e.deltaY > 0){
//     xPos -= 20;
//     heading.style.transform = `translateX(${xPos}px)`;
//     console.log(xPos);
//   } else {
//     xPos += 20;
//     heading.style.transform = `translateX(${xPos}px)`;
//     console.log(xPos);
//   }
//   if (xPos < -1000) {
//     heading.remove();
//     container.appendChild(myProfile);
//   }
// });
let skillShow = true;
let toolsShow = true;

skillEl.addEventListener('click', () => {
  if (skillShow) {
    skillSetEl.style.transform = `translateX(-20px)`;
    skillSetEl.style.width = `70%`;
    skillSetEl.style.opacity = `1`;
    skillShow = false;
  } else {
    skillSetEl.style.width = `0`;
    skillSetEl.style.transform = `translateX(-200px)`;
    skillSetEl.style.opacity = `0`;
    skillShow = true;
  }
});

toolEl.addEventListener('click', () => {
  if (toolsShow) {
    toolSetEl.style.transform = `translateX(30px)`;
    toolSetEl.style.width = `70%`;
    toolSetEl.style.opacity = `1`;
    toolsShow = false;
  } else {
    toolSetEl.style.width = `0`;
    toolSetEl.style.transform = `translateX(-300px)`;
    toolSetEl.style.opacity = `0`;
    toolsShow = true;
  }
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  // console.log(x, y);
});

transcribeEl.addEventListener("click", () => {
  // Opening an URL 
  window.open("https://transcriber-app-svf6.onrender.com/", "_blank");
});
recipeEl.addEventListener("click", () => {
  // Opening an URL 
  window.open("https://recipe-finder-e6m2.onrender.com/", "_blank");
});
transcribeEl.addEventListener("click", () => {
  // Opening an URL 
  window.open("https://transcriber-app-svf6.onrender.com/", "_blank");
});
transcribeEl.addEventListener("click", () => {
  // Opening an URL 
  window.open("https://transcriber-app-svf6.onrender.com/", "_blank");
});

