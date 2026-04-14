document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================================
       Navigation / Hamburger Menu
       ========================================================================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    /* =========================================================================
       Sticky Navbar Scroll Effect
       ========================================================================= */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
            navbar.style.height = '70px';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.height = '80px';
        }
    });

    /* =========================================================================
       Scroll Reveal Animations
       ========================================================================= */
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Trigger reveal on load for elements already in view
    setTimeout(() => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                reveal.classList.add('active');
            }
        });
    }, 100);

    /* =========================================================================
       Swiper Configuration for Portfolio
       ========================================================================= */
    if (document.querySelector('.portfolio-swiper')) {
        const swiper = new Swiper('.portfolio-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        });
    }
    /* =========================================================================
       Typing Effect for Roles
       ========================================================================= */
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');

    const roleArray = ["Medical Physicist", "Radiation Safety Officer", "Beam Physics Service Engineer"];
    const typingDelay = 65;
    const erasingDelay = 40;
    const newTextDelay = 1500;
    let roleArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (!typedTextSpan || !cursorSpan) return;
        if (charIndex < roleArray[roleArrayIndex].length) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent += roleArray[roleArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (!typedTextSpan || !cursorSpan) return;
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = roleArray[roleArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            roleArrayIndex++;
            if (roleArrayIndex >= roleArray.length) roleArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (typedTextSpan && roleArray.length) {
        setTimeout(type, newTextDelay + 250);
    }

});
