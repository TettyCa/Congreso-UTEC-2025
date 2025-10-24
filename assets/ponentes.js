let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-indicators .dot');
const totalSlides = slides.length;

let carouselInterval;

function showSlide(index, animate = true) {
  slides.forEach((slide, i) => {
    slide.style.transition = animate ? 'transform 0.5s ease' : 'none';
    slide.style.transform = `translateX(-${index * 100}%)`;
    dots[i].classList.toggle('active', i === index);
  });
}

function resetInterval() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(nextSlide, 4500);
}

function nextSlide() {
  let nextSlideIndex = (currentSlide + 1) % totalSlides;

  if (nextSlideIndex === 0) {
    showSlide(nextSlideIndex, false);
  } else {
    showSlide(nextSlideIndex, true);
  }
  currentSlide = nextSlideIndex;

  resetInterval();
}

function prevSlide() {
  let prevSlideIndex = (currentSlide - 1 + totalSlides) % totalSlides;

  if (prevSlideIndex === totalSlides - 1) {
    showSlide(prevSlideIndex, false);
  } else {
    showSlide(prevSlideIndex, true);
  }
  currentSlide = prevSlideIndex;

  resetInterval();
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide, false);
    resetInterval();
  });
});

carouselInterval = setInterval(nextSlide, 4500);

showSlide(currentSlide);