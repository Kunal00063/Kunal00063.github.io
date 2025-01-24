// Select the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle");

// Function to toggle the theme between light and dark
function toggleTheme() {
    const body = document.body;
    const isDarkTheme = body.classList.toggle("light-theme");
    if (isDarkTheme) {
        themeToggleButton.textContent = "🌞"; // Light mode icon
    } else {
        themeToggleButton.textContent = "🌙"; // Dark mode icon
    }
}

// Add event listener to the theme toggle button
themeToggleButton.addEventListener("click", toggleTheme);

// Smooth scrolling for navigation (if needed for internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Handle form submission (basic example)
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a success message (you can replace this with your backend logic)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Optionally, clear the form after submission
    contactForm.reset();
});
