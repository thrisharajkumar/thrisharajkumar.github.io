// Get the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');

// Add an event listener to the theme toggle checkbox
themeToggle.addEventListener('change', () => {
    // Get the body element
    const body = document.body;

    // Check if the theme toggle checkbox is checked
    if (themeToggle.checked) {
        // Add the dark mode class to the body element
        body.classList.add('dark-mode');
    } else {
        // Remove the dark mode class from the body element
        body.classList.remove('dark-mode');
    }
});
