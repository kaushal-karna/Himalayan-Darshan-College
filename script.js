let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
        if (i === currentSlide) {
            slide.style.animation = 'fadeIn 1s ease';
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide functionality
setInterval(nextSlide, 5000);

// Initialize slider and UI
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        showSlide(currentSlide);
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Search button toggle
    const searchBtn = document.querySelector('.button-search');
    const searchForm = document.querySelector('.search-form');
    if (searchBtn && searchForm) {
        searchBtn.addEventListener('click', () => {
            searchForm.style.display = searchForm.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Header Scroll Effect (Smart Shrink)
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }
});
