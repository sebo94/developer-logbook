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

// Update current slide
const updateCurrentSlide = (currentSlide, targetSlide) => {
  currentSlide.classList.remove("current");
  targetSlide.classList.add("current");
};

// Move to specific slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  updateCurrentSlide(currentSlide, targetSlide);
};

// Attemp to auto move to next slide
const autoLoop = () => {
  const currentSlide = track.querySelector(".current");
  const currentIndex = slides.indexOf(currentSlide);
  // If we are not at the end of the slides, move to the next slide
  if (currentIndex < slides.length - 1) {
    const targetSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, targetSlide);
    const currentIndicator = navigator.querySelector(".current");
    const nextIndicator = currentIndicator.nextElementSibling;
    updateIndicators(currentIndicator, nextIndicator);
  } else {
    // Otherwise, go back to the beginning
    const targetSlide = slides[0];
    moveToSlide(track, currentSlide, targetSlide);
    const currentIndicator = navigator.querySelector(".current");
    const nextIndicator = indicators[0];
    updateIndicators(currentIndicator, nextIndicator);
  }
};

// Auto loop
window.setInterval(function() {
  autoLoop();
}, 2500);


// Update indicators
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
