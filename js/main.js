const bodyEl = document.querySelector('body');
const container = document.querySelector('.intro');
const heading = document.querySelector('.intro-text');
const switchContainer = document.querySelector('.switch');
const switchBtn = document.querySelector('.switch-btn');
const switchLbl = document.querySelector(".switch-label");
const fogEl = document.querySelector(".fog");

let introRead = true;
let xPos = 0;

const reminder = document.createElement('div');
reminder.classList.add('reminder');
reminder.innerHTML = `
<h2>Please turn on the light.</h2>
`;

switchContainer.addEventListener('click', () => {
  if (introRead) {
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