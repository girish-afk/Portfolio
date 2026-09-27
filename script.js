const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Mobile menu toggle
if (menuIcon && navLinks) {

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside the header
    document.addEventListener('click', (event) => {
        if (
            !event.target.closest('header') &&
            navLinks.classList.contains('active')
        ) {
            navLinks.classList.remove('active');
        }
    });
}