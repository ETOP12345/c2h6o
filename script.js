/* =============================================
   SMOOTH SCROLLING FOR NAVIGATION LINKS
   ============================================= */

// Get all navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Add smooth scrolling behavior to each link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the target section id from the href
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scroll smoothly to the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* =============================================
   STAGGER ANIMATIONS FOR CARDS
   ============================================= */

// Function to add staggered animation to cards
function staggerCardAnimations() {
    // Get all interest cards
    const interestCards = document.querySelectorAll('.interest-card');
    interestCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Get all journal entries
    const journalEntries = document.querySelectorAll('.journal-entry');
    journalEntries.forEach((entry, index) => {
        entry.style.animationDelay = `${index * 0.1}s`;
    });
}

// Run the animation function when page loads
window.addEventListener('load', staggerCardAnimations);

/* =============================================
   SCROLL ANIMATIONS (FADE IN ON SCROLL)
   ============================================= */

// Create an Intersection Observer to detect when sections come into view
const observerOptions = {
    threshold: 0.1,  // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the section is in view, add the 'in-view' class
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.opacity = '0.7';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

/* =============================================
   INTERACTIVE BUTTON EFFECTS
   ============================================= */

// Get all buttons
const buttons = document.querySelectorAll('.cta-button, .contact-button');

buttons.forEach(button => {
    // Add a ripple effect on click
    button.addEventListener('click', function(e) {
        // Create a ripple element
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        // Position the ripple at the click location
        const rect = this.getBoundingClientRect();
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.left = (e.clientX - rect.left - 10) + 'px';
        ripple.style.top = (e.clientY - rect.top - 10) + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    });
});

/* =============================================
   RIPPLE ANIMATION KEYFRAMES (CSS-in-JS)
   ============================================= */

// Add ripple animation to the document
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* =============================================
   ACTIVE NAV LINK HIGHLIGHTING
   ============================================= */

window.addEventListener('scroll', () => {
    let current = '';

    // Check which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* =============================================
   MOBILE MENU TOGGLE (Optional Enhancement)
   ============================================= */

// This could be expanded with a hamburger menu for mobile devices
// Currently, the navbar is fully responsive using CSS media queries

console.log('✨ Website loaded! Welcome to Ethan Wang\'s personal website.');
