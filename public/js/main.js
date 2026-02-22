// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Play button functionality
const playButton = document.querySelector('.play-btn');
let isPlaying = false;

if (playButton) {
    playButton.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playButton.innerHTML = isPlaying
            ? '<i class="fas fa-pause"></i>'
            : '<i class="fas fa-play"></i>';

        // Add pulse animation
        playButton.style.animation = 'none';
        setTimeout(() => {
            playButton.style.animation = 'pulse 0.5s';
        }, 10);
    });
}

// Animate elements on scroll
const animateOnScroll = () => {
    // Animate expertise cards
    const expertiseCards = document.querySelectorAll('.expertise-card');
    expertiseCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });

    // Animate tech logos
    const techLogos = document.querySelectorAll('.tech-logo');
    techLogos.forEach((logo, index) => {
        const logoPosition = logo.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (logoPosition < screenPosition) {
            setTimeout(() => {
                logo.style.opacity = '1';
                logo.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });

    // Animate contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });

    // Animate social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        const linkPosition = link.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (linkPosition < screenPosition) {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
};

// Set initial state for animations
document.querySelectorAll('.expertise-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

document.querySelectorAll('.tech-logo').forEach(logo => {
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(30px) scale(0.8)';
    logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

document.querySelectorAll('.contact-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

document.querySelectorAll('.social-link').forEach(link => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(50px)';
    link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced name animation on hover
const nameElement = document.querySelector('.name');
if (nameElement) {
    nameElement.addEventListener('mouseenter', () => {
        nameElement.style.animation = 'nameGlow 0.5s ease-in-out infinite alternate';
    });

    nameElement.addEventListener('mouseleave', () => {
        nameElement.style.animation = 'nameGlow 3s ease-in-out infinite alternate';
    });
}

// Click tracking for social links
document.querySelectorAll('a[href*="wa.me"]').forEach(whatsappLink => {
    whatsappLink.addEventListener('click', function () {
        console.log('WhatsApp link clicked - Opening chat with Dhruv');
    });
});

document.querySelectorAll('a[href*="instagram.com"]').forEach(instaLink => {
    instaLink.addEventListener('click', function () {
        console.log('Instagram link clicked - Opening profile tobii._.29');
    });
});

document.querySelectorAll('a[href*="linkedin.com/in/dhruv-pujara"]').forEach(linkedinLink => {
    linkedinLink.addEventListener('click', function () {
        console.log('LinkedIn link clicked - Opening profile dhruv-pujara');
    });
});















// Add to your main.js file

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    scrollProgress.style.width = progress + '%';
});

// Typing Effect
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    subtitle.classList.add('typing-effect');
}

// 3D Tilt Effect
document.querySelectorAll('.tilt-effect').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.setProperty('--rotateX', rotateX + 'deg');
        card.style.setProperty('--rotateY', rotateY + 'deg');
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    });
});

// Ripple Effect on Buttons
document.querySelectorAll('.ripple-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add gradient-text class to section titles
document.querySelectorAll('.section-title h2 span').forEach(span => {
    span.classList.add('gradient-text');
});

// Add tilt-effect to cards
document.querySelectorAll('.expertise-card, .floating-card, .contact-item').forEach(card => {
    card.classList.add('tilt-effect');
});

// Add ripple-btn to buttons
document.querySelectorAll('.btn, .social-link').forEach(btn => {
    btn.classList.add('ripple-btn');
});