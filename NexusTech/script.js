let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function showSlides() {
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  const slideWrapper = document.querySelector(".slide-wrapper");
  slideWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex].classList.add("active");
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
  resetTimer();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
  resetTimer();
}

let slideTimer = setInterval(() => {
  slideIndex++;
  showSlides();
}, 5000);

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlides();
  }, 5000);
}

const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');
const overlay = document.getElementById('overlay');

// Abrir o cerrar el menú y el overlay
menuToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Cerrar el menú al hacer clic en el overlay
overlay.addEventListener('click', function() {
  navbarLinks.classList.remove('active');
  overlay.classList.remove('active');
});

