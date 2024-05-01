 
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
        navbar.style.pointerEvents = "auto";  
        icon.classList.add("x-icon");  
    } else {
        // Hide the navbar
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none";  
        icon.classList.remove("x-icon");  
    }
}

 
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const text = "Sherwin Gonsalves"; 
const profession = "Software Developer"; 
const delay = 100; 

function typeText(index, element, string) {
    if (index < string.length) {
        element.textContent += string[index];
        setTimeout(() => {
            typeText(index + 1, element, string);
        }, delay);
    }
}

typeText(0, document.getElementById("typing-text"), text); 
setTimeout(() => {
    typeText(0, document.getElementById("profession"), profession); 
}, delay * text.length);



const skills = [
    'HTML/CSS',
    'JavaScript',
    'Responsive Design',
    'Python Programming Language',
    'Java',
    'C/C++',
    'PHP',
    'Flask (Python)',
    'MySQL'
];


function generateSkillHTML(skill) {
    return `
        <div class="capability">
            <div class="capability-description">
                <h3>${skill}</h3>
            </div>
        </div>
    `;
}


function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillHTML = generateSkillHTML(skill);
        skillsContainer.innerHTML += skillHTML;
    });
}


renderSkills();