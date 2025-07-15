// // DOM Elements
// const loadingScreen = document.getElementById('loading-screen');
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('.nav-menu');
// const navLinks = document.querySelectorAll('.nav-link');
// const portfolioItems = document.querySelectorAll('.portfolio-item');
// const filterButtons = document.querySelectorAll('.filter-btn');
// const contactForm = document.querySelector('.form');

// // Initialize the application
// document.addEventListener('DOMContentLoaded', function() {
//     // Hide loading screen after page loads
//     setTimeout(() => {
//         loadingScreen.classList.add('hidden');
//     }, 1500);

//     // Initialize all features
//     initializeNavigation();
//     initializeScrollAnimations();
//     initializePortfolioFilter();
//     initializeContactForm();
//     initializeThemePreferences();
//     initializeSmoothScrolling();
//     initializeHoverEffects();
// });

// // Navigation functionality
// function initializeNavigation() {
//     // Mobile menu toggle
//     navToggle.addEventListener('click', (e) => {
//         e.stopPropagation();
//         navMenu.classList.toggle('active');
//         navToggle.classList.toggle('active');
//         document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
//     });

//     // Close mobile menu when clicking on a link
//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             navMenu.classList.remove('active');
//             navToggle.classList.remove('active');
//             document.body.style.overflow = '';
//         });
//     });

//     // Close mobile menu when clicking outside
//     document.addEventListener('click', (e) => {
//         if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
//             navMenu.classList.remove('active');
//             navToggle.classList.remove('active');
//             document.body.style.overflow = '';
//         }
//     });

//     // Update active navigation link based on scroll position
//     window.addEventListener('scroll', debounce(() => {
//         updateActiveNavLink();
//         updateNavbarOnScroll();
//     }, 100));
    
//     // Set initial active state
//     updateActiveNavLink();
// }

// function updateNavbarOnScroll() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// }

// function updateActiveNavLink() {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.nav-link');
    
//     let currentSection = '';
//     const scrollPosition = window.scrollY + 150; // Offset for fixed nav
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionBottom = sectionTop + section.offsetHeight;
        
//         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//             currentSection = section.getAttribute('id');
//         }
//     });
    
//     // Default to home if no section is active or at top of page
//     if (!currentSection || window.scrollY < 100) {
//         currentSection = 'home';
//     }
    
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         const href = link.getAttribute('href');
//         if (href === `#${currentSection}`) {
//             link.classList.add('active');
//         }
//     });
// }

// // Scroll animations using Intersection Observer
// function initializeScrollAnimations() {
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             }
//         });
//     }, observerOptions);

//     // Add fade-in class to elements that should animate
//     const animatedElements = document.querySelectorAll('.glass-card, .section-header, .hero-content > *');
//     animatedElements.forEach(el => {
//         el.classList.add('fade-in');
//         observer.observe(el);
//     });
// }

// // Portfolio filter functionality
// function initializePortfolioFilter() {
//     filterButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const filter = button.getAttribute('data-filter');
            
//             // Update active button
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
            
//             // Filter portfolio items
//             portfolioItems.forEach(item => {
//                 const category = item.getAttribute('data-category');
                
//                 if (filter === 'all' || category === filter) {
//                     item.classList.remove('hidden');
//                     item.style.display = 'block';
//                 } else {
//                     item.classList.add('hidden');
//                     setTimeout(() => {
//                         item.style.display = 'none';
//                     }, 300);
//                 }
//             });
//         });
//     });
// }

// // Contact form functionality
// function initializeContactForm() {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         // Get form data
//         const formData = new FormData(contactForm);
//         const data = {
//             name: formData.get('name'),
//             email: formData.get('email'),
//             subject: formData.get('subject'),
//             message: formData.get('message')
//         };
        
//         // Validate form
//         if (!validateForm(data)) {
//             return;
//         }
        
//         // Show loading state
//         const submitButton = contactForm.querySelector('button[type="submit"]');
//         const originalText = submitButton.textContent;
//         submitButton.textContent = 'Sending...';
//         submitButton.disabled = true;
        
//         // Simulate form submission (replace with actual API call)
//         setTimeout(() => {
//             showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
//             contactForm.reset();
//             submitButton.textContent = originalText;
//             submitButton.disabled = false;
//         }, 2000);
//     });
// }

// function validateForm(data) {
//     const errors = [];
    
//     if (!data.name.trim()) {
//         errors.push('Name is required');
//     }
    
//     if (!data.email.trim()) {
//         errors.push('Email is required');
//     } else if (!isValidEmail(data.email)) {
//         errors.push('Please enter a valid email address');
//     }
    
//     if (!data.subject.trim()) {
//         errors.push('Subject is required');
//     }
    
//     if (!data.message.trim()) {
//         errors.push('Message is required');
//     }
    
//     if (errors.length > 0) {
//         showNotification(errors.join(', '), 'error');
//         return false;
//     }
    
//     return true;
// }

// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// function showNotification(message, type) {
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification ${type}`;
//     notification.textContent = message;
    
//     // Style the notification
//     notification.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         padding: 15px 20px;
//         border-radius: 10px;
//         color: white;
//         font-weight: 500;
//         z-index: 10000;
//         transform: translateX(100%);
//         transition: transform 0.3s ease;
//         max-width: 300px;
//         word-wrap: break-word;
//     `;
    
//     if (type === 'success') {
//         notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
//     } else {
//         notification.style.background = 'linear-gradient(135deg, #f44336, #da190b)';
//     }
    
//     document.body.appendChild(notification);
    
//     // Animate in
//     setTimeout(() => {
//         notification.style.transform = 'translateX(0)';
//     }, 100);
    
//     // Remove after 5 seconds
//     setTimeout(() => {
//         notification.style.transform = 'translateX(100%)';
//         setTimeout(() => {
//             document.body.removeChild(notification);
//         }, 300);
//     }, 5000);
// }

// // Theme preferences
// function initializeThemePreferences() {
//     // Check for saved theme preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         document.body.setAttribute('data-theme', savedTheme);
//     }
    
//     // Save scroll position
//     window.addEventListener('beforeunload', () => {
//         localStorage.setItem('scrollPosition', window.scrollY);
//     });
    
//     // Restore scroll position
//     window.addEventListener('load', () => {
//         const scrollPosition = localStorage.getItem('scrollPosition');
//         if (scrollPosition) {
//             window.scrollTo(0, parseInt(scrollPosition));
//             localStorage.removeItem('scrollPosition');
//         }
//     });
// }

// // Smooth scrolling for anchor links
// function initializeSmoothScrolling() {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
            
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 const offsetTop = target.offsetTop - 100; // Account for fixed nav
                
//                 window.scrollTo({
//                     top: offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// }

// // Enhanced hover effects
// function initializeHoverEffects() {
//     // Add parallax effect to floating elements
//     const floatingElements = document.querySelectorAll('.floating-element');
    
//     document.addEventListener('mousemove', (e) => {
//         const mouseX = e.clientX / window.innerWidth;
//         const mouseY = e.clientY / window.innerHeight;
        
//         floatingElements.forEach((element, index) => {
//             const speed = (index + 1) * 0.5;
//             const x = (mouseX - 0.5) * speed * 20;
//             const y = (mouseY - 0.5) * speed * 20;
            
//             element.style.transform = `translate(${x}px, ${y}px)`;
//         });
//     });
    
//     // Add tilt effect to cards
//     const cards = document.querySelectorAll('.glass-card');
//     cards.forEach(card => {
//         card.addEventListener('mousemove', (e) => {
//             const rect = card.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
            
//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;
            
//             const rotateX = (y - centerY) / centerY * 5;
//             const rotateY = (centerX - x) / centerX * 5;
            
//             card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
//         });
        
//         card.addEventListener('mouseleave', () => {
//             card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
//         });
//     });
// }

// // Utility functions
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// // Performance optimization
// function optimizeAnimations() {
//     // Reduce animations on low-end devices
//     const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
//     if (mediaQuery.matches) {
//         document.documentElement.style.setProperty('--animation-duration', '0.01s');
//         document.documentElement.style.setProperty('--transition-duration', '0.01s');
//     }
// }

// // Initialize performance optimizations
// optimizeAnimations();

// // Handle resize events
// window.addEventListener('resize', debounce(() => {
//     // Recalculate positions and animations on resize
//     const event = new CustomEvent('resize-optimized');
//     window.dispatchEvent(event);
// }, 250));

// // Keyboard accessibility
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//         // Close mobile menu
//         navMenu.classList.remove('active');
//         navToggle.classList.remove('active');
        
//         // Close any open modals or overlays
//         const openModals = document.querySelectorAll('.modal.active');
//         openModals.forEach(modal => {
//             modal.classList.remove('active');
//         });
//     }
// });

// // Initialize service worker for offline support (if available)
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         // Service worker would be registered here in a production app
//         console.log('Service Worker support detected');
//     });
// }

// // Export functions for testing (if needed)
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = {
//         validateForm,
//         isValidEmail,
//         showNotification,
//         debounce
//     };
// }
