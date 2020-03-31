const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const navigator = document.querySelector(".carousel__nav");
const indicators = Array.from(navigator.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current");
  targetSlide.classList.add("current");
};

window.setInterval(function(){
  const currentSlide = track.querySelector(".current");
  const targetSlide = currentSlide.nextElementSibling;
  moveToSlide(currentSlide, targetSlide);
}, 3000);

const updateIndicators = (currentIndicator, targetIndicator) => {
  currentIndicator.classList.remove("current");
  targetIndicator.classList.add("current");
};

// When i click the nav indicators, move to that slide
navigator.addEventListener("click", e => {
  // What indicator was clicked?
  const targetIndicator = e.target.closest("button");
  // If we are not clicking a button, exit the function
  if (!targetIndicator) return;
  const currentSlide = track.querySelector(".current");
  const currentIndicator = navigator.querySelector(".current");
  const targetIndex = indicators.findIndex(dot => dot === targetIndicator);
  targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateIndicators(currentIndicator, targetIndicator);
});
