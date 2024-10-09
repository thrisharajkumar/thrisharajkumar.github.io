// Select the toggle input
const toggle = document.getElementById('toggle');

// Check for saved user preference, if any, and apply it
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggle.checked = true; // Set the toggle to checked
}

// Add an event listener for the toggle
toggle.addEventListener('change', () => {
    // Toggle the dark class on the body
    document.body.classList.toggle('dark'); 
    // Save the user's preference
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark'); // Save as dark
    } else {
        localStorage.setItem('theme', 'light'); // Save as light
    }
});
