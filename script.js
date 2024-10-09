document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme toggle functionality
    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
    });
});
