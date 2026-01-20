// Background slideshow and scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    // Background Image Slideshow
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showNextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to next slide
        slides[currentSlide].classList.add('active');
    }
    
    // Start slideshow after initial delay
    setTimeout(() => {
        // Show first slide
        if (slides.length > 0) {
            slides[0].classList.add('active');
        }
        
        // Change slide every 4 seconds
        setInterval(showNextSlide, 4000);
    }, 500);
    
    // Scroll indicator fade out on scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const landingPage = document.querySelector('.landing-page');
    
    // Hide scroll indicator when user scrolls past landing page
    let scrolled = false;
    window.addEventListener('scroll', function() {
        const landingHeight = landingPage ? landingPage.offsetHeight : window.innerHeight;
        
        if (!scrolled && window.scrollY > landingHeight * 0.3) {
            scrolled = true;
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    scrollIndicator.style.display = 'none';
                }, 500);
            }
        } else if (scrolled && window.scrollY <= landingHeight * 0.3) {
            scrolled = false;
            if (scrollIndicator) {
                scrollIndicator.style.display = 'flex';
                scrollIndicator.style.opacity = '1';
            }
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe experience items and project cards
    const experienceItems = document.querySelectorAll('.experience-item');
    const projectCards = document.querySelectorAll('.project-card');

    experienceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Smooth hover effects
    const cards = document.querySelectorAll('.experience-item, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Skill tag interactions
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
