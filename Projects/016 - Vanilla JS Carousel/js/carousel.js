const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__btn--right");
const prevButton = document.querySelector(".carousel__btn--left");
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

const updateIndicators = (currentIndicator, targetIndicator) => {
  currentIndicator.classList.remove("current");
  targetIndicator.classList.add("current");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    nextButton.classList.add("is-hidden");
    prevButton.classList.remove("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

// When i click right, move slides to the right
nextButton.addEventListener("click", e => {
  // Find the current slide
  const currentSlide = track.querySelector(".current");
  const nextSlide = currentSlide.nextElementSibling;
  const currentIndicator = navigator.querySelector(".current");
  const nextIndicator = currentIndicator.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  // Move to slide
  moveToSlide(track, currentSlide, nextSlide);
  //Update indicators
  updateIndicators(currentIndicator, nextIndicator);
  // Hide/show arrows
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// When i click left, move slides to the left
prevButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current");
  const prevSlide = currentSlide.previousElementSibling;
  const currentIndicator = navigator.querySelector(".current");
  const prevIndicator = currentIndicator.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  // Move to slide
  moveToSlide(track, currentSlide, prevSlide);
  //Update indicators
  updateIndicators(currentIndicator, prevIndicator);
  // Hide/show arrows
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

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
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
