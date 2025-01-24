// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggle.textContent = body.classList.contains('light-theme') ? '🌞' : '🌙';
});

// Typewriter Effect
const tagline = document.getElementById('tagline');
const text = "Medical Physicist cum Radiation Safety Officer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

// Smooth Scroll Animations
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});