hamburger = document.querySelector(".hamburger")
    hamburger.onclick = function(){
        navBar = document.querySelector(".nav-bar")
        navBar.classList.toggle("active")
    }

// Slider de imagens
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
    if (index === currentSlide) {
        slide.style.opacity = '1';
    } else {
        slide.style.opacity = '0';
    }
    });
    
    currentSlide = (currentSlide + 1) % slides.length;
    setTimeout(showSlide, 5000); // Altera o slide a cada 2 segundos (2000 ms)
}

showSlide();

// Slider Fim
