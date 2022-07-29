// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector(".btn-next"); // selects next slide button


let currSlide = 0; // current slide counter, initialised to zero

let maxSlide = slides.length - 1; // variable containing maximum number of slides

// add event listener and navigation functionality
nextSlide.addEventListener("click", function checkSlideNext() {
  // check if current slide is the last and reset current slide
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-previous");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function checkSlidePrevious () {
  // check if current slide is the first and reset current slide to last
  if (currSlide === 0) {
    currSlide = maxSlide;
  } else {
    currSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
  });
});
