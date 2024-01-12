document.addEventListener("DOMContentLoaded", function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link a');

    // Function to handle smooth scrolling
    function handleNavLinkClick(e) {
        e.preventDefault();

        // Find the target element using the ID
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate the offset, considering the fixed navigation bar
            const offset = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;

            // Scroll to the target element with a smooth animation
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }

    // Attach the smooth scrolling function to each navigation link
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', handleNavLinkClick);
    });

    // Select the "Cook Now" link in the header
    const cookNowLink = document.querySelector('.btn-header a');

    cookNowLink.addEventListener('click', function(e) {
        e.preventDefault();

        // Find the target element using the ID
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate the offset, considering the fixed navigation bar
            const offset = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;

            // Scroll to the target element with a smooth animation
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});
