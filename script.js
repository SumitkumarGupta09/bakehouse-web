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
    const cakeNavFooter = document.querySelector('.cake-nav-footer');
    const dropdowns = document.querySelectorAll('.category-nav .dropdown');

    // Helper: Detect mobile
    function isMobile() {
        return window.matchMedia('(max-width: 991px)').matches;
    }

    // Remove all dropdowns' active class
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }

    // Attach click event to .nav-link inside each .dropdown for mobile
    dropdowns.forEach(dropdown => {
        const navLink = dropdown.querySelector('.nav-link');
        if (navLink) {
            navLink.addEventListener('click', function(e) {
                if (isMobile()) {
                    e.preventDefault();
                    const isActive = dropdown.classList.contains('active');
                    closeAllDropdowns();
                    if (!isActive) dropdown.classList.add('active');
                }
            });
        }
    });

    // For non-dropdown nav-items, close dropdowns on click
    navItems.forEach(item => {
        if (!item.classList.contains('dropdown')) {
            item.addEventListener('click', function () {
                closeAllDropdowns();
            });
        }
    });

    // Close dropdowns when clicking outside (mobile only)
    document.addEventListener('click', function (e) {
        if (isMobile()) {
            let insideDropdown = false;
            dropdowns.forEach(dropdown => {
                if (dropdown.contains(e.target)) insideDropdown = true;
            });
            if (!insideDropdown) closeAllDropdowns();
        }
    });

    // Dropdown menu links: close dropdown on click (mobile only)
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Visual feedback
            link.style.transform = 'scale(1.05)';
            setTimeout(() => { link.style.transform = 'scale(1)'; }, 200);
            // Close dropdowns (mobile only)
            if (isMobile()) closeAllDropdowns();
            // Optionally: alert or filter
            // alert(`You clicked on: ${link.textContent.trim()}`);
        });
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

            // Add a temporary visual feedback
            link.style.transform = 'scale(1.05)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 200);

            // You can add specific functionality here based on the link clicked
            // For example: filter products, navigate to category page, etc.
            // For now, we'll just show an alert to demonstrate the functionality
            alert(`You clicked on: ${linkText}`);
        });
    });

});