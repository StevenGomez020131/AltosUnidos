// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Donation amount buttons
const amountButtons = document.querySelectorAll('.amount-btn');
const customAmountInputs = document.querySelectorAll('.custom-amount');

amountButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons in the same group
        const parent = this.closest('.donation-type');
        parent.querySelectorAll('.amount-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show/hide custom amount input
        const customInput = parent.querySelector('.custom-amount');
        if (this.classList.contains('custom')) {
            customInput.style.display = 'block';
            customInput.focus();
        } else {
            customInput.style.display = 'none';
        }
    });
});

// Form submission (you'll need to integrate with your backend)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would send the data to your backend
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        this.reset();
    });
}

// Donation button clicks (you'll need to integrate with payment processor)
const donationButtons = document.querySelectorAll('.donation-type .btn-large');
donationButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const parent = this.closest('.donation-type');
        const activeButton = parent.querySelector('.amount-btn.active');
        const customInput = parent.querySelector('.custom-amount');
        
        let amount = 0;
        
        if (activeButton && !activeButton.classList.contains('custom')) {
            amount = activeButton.dataset.amount;
        } else if (customInput.style.display === 'block' && customInput.value) {
            amount = customInput.value;
        }
        
        if (amount > 0) {
            // Here you would integrate with your payment processor (Stripe, PayPal, etc.)
            console.log('Processing donation:', amount);
            
            // For now, just show an alert
            const isRecurring = this.textContent.includes('Mensualmente');
            const message = isRecurring 
                ? `Procesando donación mensual de $${amount} MXN...`
                : `Procesando donación única de $${amount} MXN...`;
            
            alert(message + '\n\nEsta es una demostración. Integra con tu procesador de pagos.');
        } else {
            alert('Por favor selecciona o ingresa una cantidad.');
        }
    });
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Animate budget bars on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const budgetFills = entry.target.querySelectorAll('.budget-fill');
            budgetFills.forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0%';
                setTimeout(() => {
                    fill.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

const budgetBreakdown = document.querySelector('.budget-breakdown');
if (budgetBreakdown) {
    observer.observe(budgetBreakdown);
}

// Counter animation for impact metrics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
}

const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const metricNumber = entry.target.querySelector('.metric-number');
            const targetValue = parseInt(metricNumber.textContent.replace(/[^0-9]/g, ''));
            animateCounter(metricNumber, targetValue);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

const metrics = document.querySelectorAll('.metric');
metrics.forEach(metric => {
    metricObserver.observe(metric);
});

// Print current year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear && footerYear.textContent.includes('2024')) {
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
}
