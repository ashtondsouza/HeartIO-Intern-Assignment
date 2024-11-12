<template>
    <div class="main">
        <div class="header text-center">
        <h2>SECTION III [25 points]</h2>
      </div>
        <div class="carousel">
    <div class="carousel-track-container">
      <ul class="carousel-track">
        <li class="carousel-slide current-slide">
          <div class="review-content">
            <h3>Lorem Ipsum</h3>
          <img src="../assets/commaend.svg" class="coma left" alt="">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <img src="../assets/commastart.svg" class="coma right"  alt="">
          </div>
        </li>
        <li class="carousel-slide">
            <div class="review-content">
            <h3>Lorem Ipsum</h3>
          <img src="../assets/commaend.svg" class="coma left" alt="">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <img src="../assets/commastart.svg" class="coma right"  alt="">
          </div>
        </li>
        <li class="carousel-slide">
            <div class="review-content">
            <h3>Lorem Ipsum</h3>
          <img src="../assets/commaend.svg" class="coma left" alt="">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <img src="../assets/commastart.svg" class="coma right"  alt="">
          </div>
        </li>

        <li class="carousel-slide">
            <div class="review-content">
            <h3>Lorem Ipsum</h3>
          <img src="../assets/commaend.svg" class="coma left" alt="">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <img src="../assets/commastart.svg" class="coma right"  alt="">
          </div>
        </li>
        <li class="carousel-slide">
            <div class="review-content">
            <h3>Lorem Ipsum</h3>
          <img src="../assets/commaend.svg" class="coma left" alt="">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <img src="../assets/commastart.svg" class="coma right"  alt="">
          </div>
        </li>
      </ul>
    </div>
    <button class="carousel-button left">❮</button>
    <button class="carousel-button right">❯</button>
    <div class="carousel-indicators">
      <button class="indicator current-indicator"></button>
      <button class="indicator"></button>
      <button class="indicator"></button>
      <button class="indicator"></button>
      <button class="indicator"></button>
    </div>
  </div>
  <div class="closing">
<img src="../assets/logo.svg" alt="">
  </div>
    </div>
  </template>
  
 
  
 
<style>
.header {
    text-align: center;
    padding: 20px;
    font-weight: 600;
    margin: 10px;
    color: #01818C;
  }
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EBF7FC;
}
.carousel {
  position: relative;
  width: 100%; /* Full width */
  max-width: 800px; /* Limit the maximum width */
  height: auto; /* Automatically adjust height */
  margin: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Carousel Track */
.carousel-track-container {
  position: relative;
  width: 90%; /* Full width */
  height: auto; 
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-track {
  display: flex;
  height: auto;
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
    
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
.coma{
    position: relative;
    color: gray;
    font-size: 70px;
}
.coma.left {
  left: -200px;
  top: -10px;
}

.coma.right {
  right: -200px;
}
.review-content {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: auto;
  margin-bottom: 20px;
}
.review-content h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #043953;
}
.review-content p {
  font-size: 1rem;
  margin: 0 15px 10px;
  color: #555;
  text-align: start;
}
.review-content small {
  font-size: 1rem;
  color: #888;
}
.carousel-button {
  position: absolute;
  top: 50%;
  border-radius: 50% 50%;
  transform: translateY(-50%);
  background: #043953;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  z-index: 10;
}
.carousel-button.left {
  left: 60px;
}
.carousel-button.right {
  right: 30px;
}
.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-left: 150px;
}
.indicator {
  width: 15px;
  height: 15px;
  background-color: rgba(116, 116, 116, 0.5);
  border: 2px solid white;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}
.indicator.current-indicator {
  background-color:#043953;
}
.closing{
    height: 300px;
    width: 100%;
    margin-top: 30px;
    background-color: #043953;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<script>
export default {
  mounted() {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button.right");
    const prevButton = document.querySelector(".carousel-button.left");
    const indicators = Array.from(document.querySelectorAll(".indicator"));

    // Get the width of a slide
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to each other
    slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    });

    const moveToSlide = (track, currentSlide, targetSlide) => {
      const amountToMove = targetSlide.style.left;
      track.style.transform = `translateX(-${amountToMove})`;
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    const updateIndicators = (currentIndicator, targetIndicator) => {
      currentIndicator.classList.remove("current-indicator");
      targetIndicator.classList.add("current-indicator");
    };

    const handleNextClick = () => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling || slides[0]; // Wrap to first slide
      const currentIndicator = document.querySelector(".current-indicator");
      const nextIndicator = currentIndicator.nextElementSibling || indicators[0]; // Wrap to first indicator

      moveToSlide(track, currentSlide, nextSlide);
      updateIndicators(currentIndicator, nextIndicator);
    };

    const handlePrevClick = () => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Wrap to last slide
      const currentIndicator = document.querySelector(".current-indicator");
      const prevIndicator = currentIndicator.previousElementSibling || indicators[indicators.length - 1]; // Wrap to last indicator

      moveToSlide(track, currentSlide, prevSlide);
      updateIndicators(currentIndicator, prevIndicator);
    };

    nextButton.addEventListener("click", handleNextClick);
    prevButton.addEventListener("click", handlePrevClick);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide");
        const currentIndicator = document.querySelector(".current-indicator");
        const targetSlide = slides[index];

        moveToSlide(track, currentSlide, targetSlide);
        updateIndicators(currentIndicator, indicator);
      });
    });
  },
};
</script>
