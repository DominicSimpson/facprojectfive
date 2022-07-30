// Select all slides
const prevSlider = document.getElementById("prevSlider");
const nextSlider = document.getElementById("nextSlider");
const dotOne = document.getElementById("dotOne");
const dotTwo = document.getElementById("dotTwo");
const dotThree = document.getElementById("dotThree");
prevSlider.addEventListener("click", function (){
  showSlides(slideIndex += -1);
});
nextSlider.addEventListener("click", function (){
  showSlides(slideIndex += 1);
});
dotOne.addEventListener("click", function (){
  showSlides(slideIndex = 1);
});
dotTwo.addEventListener("click", function (){
  showSlides(slideIndex = 2);
});
dotThree.addEventListener("click", function (){
  showSlides(slideIndex = 3);
});
let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
