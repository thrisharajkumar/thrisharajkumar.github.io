// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Theme toggle functionality
    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
    });

    // Slider functionality
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // Change slide every 5 seconds
});
