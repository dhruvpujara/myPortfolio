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


// Hero 3D interaction
const heroVisual = document.querySelector('.code-visual');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroVisual && !prefersReducedMotion) {
    const heroInner = heroVisual.querySelector('.code-visual-inner');

    heroVisual.addEventListener('mousemove', (event) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = (0.5 - (y / rect.height)) * 20;

        heroVisual.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        if (heroInner) {
            heroInner.style.animationPlayState = 'paused';
        }
    });

    heroVisual.addEventListener('mouseleave', () => {
        heroVisual.style.transform = '';
        if (heroInner) {
            heroInner.style.animationPlayState = 'running';
        }
    });
}
