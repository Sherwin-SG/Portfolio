// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    var icon = document.getElementById("hamburger-icon");

    if (navbar.style.opacity === "0" || navbar.style.opacity === "") {
        // Show the navbar
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto"; // Allow interactions with the navbar
        icon.classList.add("x-icon"); // Change icon to close symbol
    } else {
        // Hide the navbar
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none"; // Disable interactions with the navbar
        icon.classList.remove("x-icon"); // Change icon back to hamburger
    }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

