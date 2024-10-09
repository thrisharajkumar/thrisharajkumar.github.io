// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    const body = document.body;
    body.classList.toggle('dark-mode', themeToggle.checked);
});

// Slider functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

if (slider && slides.length > 0) {
    let currentSlide = 0;

    slides[currentSlide].classList.add('active');
    
    setInterval(() => {
        // Hide current slide
        slides[currentSlide].classList.remove('active');
        
        // Increment the current slide index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show next slide
        slides[currentSlide].classList.add('active');
    }, 5000);
}
