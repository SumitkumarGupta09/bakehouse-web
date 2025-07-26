// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Header Icons Functionality ---
    const menuBtn = document.querySelector('#menu-btn');
    const searchBtn = document.querySelector('#search-btn');
    const cartBtn = document.querySelector('#cart-btn');
    const loginBtn = document.querySelector('#login-btn');
    const navbar = document.querySelector('.header .navbar');
    const searchForm = document.querySelector('.search-form'); // Assuming you'll add a search form
    const shoppingCart = document.querySelector('.shopping-cart'); // Assuming you'll add a shopping cart
    const loginForm = document.querySelector('.login-form'); // Assuming you'll add a login form

    // Toggle mobile navigation menu
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            // Close other active forms/carts when menu is opened
            if (searchForm) searchForm.classList.remove('active');
            if (shoppingCart) shoppingCart.classList.remove('active');
            if (loginForm) loginForm.classList.remove('active');
        });
    }

    // Placeholder for search button functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            // Implement search form toggle or modal here
            console.log('Search button clicked!');
            // Example: searchForm.classList.toggle('active');
            // Close other active elements
            navbar.classList.remove('active');
            if (shoppingCart) shoppingCart.classList.remove('active');
            if (loginForm) loginForm.classList.remove('active');
        });
    }

    // Placeholder for cart button functionality
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            // Implement shopping cart toggle or modal here
            console.log('Cart button clicked!');
            // Example: shoppingCart.classList.toggle('active');
            // Close other active elements
            navbar.classList.remove('active');
            if (searchForm) searchForm.classList.remove('active');
            if (loginForm) loginForm.classList.remove('active');
        });
    }

    // Placeholder for login button functionality
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            // Implement login form toggle or modal here
            console.log('Login button clicked!');
            // Example: loginForm.classList.toggle('active');
            // Close other active elements
            navbar.classList.remove('active');
            if (searchForm) searchForm.classList.remove('active');
            if (shoppingCart) shoppingCart.classList.remove('active');
        });
    }

    // Close navbar/forms when scrolling
    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
        if (searchForm) searchForm.classList.remove('active');
        if (shoppingCart) shoppingCart.classList.remove('active');
        if (loginForm) loginForm.classList.remove('active');
    });


    // --- Home Section Slider Functionality ---
    const slides = document.querySelectorAll('.home .slides-container .slide');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners for slider navigation arrows
    const nextSlideBtn = document.querySelector('#next-slide');
    const prevSlideBtn = document.querySelector('#prev-slide');

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            clearInterval(slideInterval); // Stop auto-play on manual navigation
            nextSlide();
            startAutoPlay(); // Restart auto-play
        });
    }

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            clearInterval(slideInterval); // Stop auto-play on manual navigation
            prevSlide();
            startAutoPlay(); // Restart auto-play
        });
    }

    // Auto-play functionality
    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Initialize slider: show the first slide and start auto-play
    if (slides.length > 0) {
        showSlide(currentSlide);
        startAutoPlay();
    }

    // --- Category Navigation Menu Functionality ---
    const navItems = document.querySelectorAll('.category-nav .nav-item');
    
    // Add click event listeners to navigation items
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Smooth scroll to corresponding section (if exists)
            const targetId = item.textContent.toLowerCase().replace(/\s+/g, '-');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active navigation item based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // You can add logic here to highlight the appropriate nav item
        // based on which section is currently in view
        // This is a placeholder for future enhancement
    });

    // --- Cake Navigation Footer Functionality ---
    const cakeNavLinks = document.querySelectorAll('.cake-nav-footer .nav-links a');
    
    // Add click event listeners to cake navigation links
    cakeNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the link text for potential filtering or navigation
            const linkText = link.textContent.trim();
            console.log('Cake category clicked:', linkText);
            
            // You can add specific functionality here based on the link clicked
            // For example: filter products, navigate to category page, etc.
            
            // Add a temporary visual feedback
            link.style.transform = 'scale(1.05)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 200);
        });
    });

});