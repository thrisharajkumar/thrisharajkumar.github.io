// Select the toggle input
const toggle = document.getElementById('toggle');

// Check for saved user preference, if any, and apply it
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggle.checked = true; // Set the toggle to checked
} else {
    document.body.classList.remove('dark');
}

// Add an event listener for the toggle
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('dark'); // Add dark class
        localStorage.setItem('theme', 'dark'); // Save the preference
    } else {
        document.body.classList.remove('dark'); // Remove dark class
        localStorage.setItem('theme', 'light'); // Save the preference
    }
});
