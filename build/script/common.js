const next = document.querySelector('.next');
const slider = document.querySelector('.slider-track');
let move = 0;
let timer;

function timeOut() {
  timer = setTimeout(nextSlide, 3000);
}

timeOut(); // события

next.addEventListener('click', nextSlide); // Функции

function nextSlide() {
  move -= 220;

  if (move < -1306) {
    move = 220;
  } else {
    slider.style.left = move + 'px';
  }

  clearTimeout(timer);
  timeOut();
}

const next1 = document.querySelector('.next1');
const slider1 = document.querySelector('.slider-track1'); // события

next1.addEventListener('click', nextSlide1); // Функции

function nextSlide1() {
  move -= 220;

  if (move < -1306) {
    move = 220;
  } else {
    slider1.style.left = move + 'px';
  }

  clearTimeout(timer);
  timeOut();
}

const next2 = document.querySelector('.next3');
const slider2 = document.querySelector('.slider-track3'); // события

next2.addEventListener('click', nextSlide2); // Функции

function nextSlide2() {
  move -= 220;

  if (move < -1306) {
    move = 220;
  } else {
    slider2.style.left = move + 'px';
  }

  clearTimeout(timer);
  timeOut();
} // let move = 0;
// console.log(
//   $('.next').on('click',function() {
//   move=-300;
// })
// );