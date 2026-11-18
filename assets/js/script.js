
// DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀" : "☾";

    localStorage.setItem("portfolioTheme", isDark ? "dark" : "light");
});

// MEMUAT TEMA

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀";
}

// TYPING ANIMATION

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "UI/UX Designer",
    "Creative Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingAnimation() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typingAnimation, speed);
}

typingAnimation();

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    menuToggle.textContent =
        navMenu.classList.contains("open") ? "✕" : "☰";
});

// MENU AUTO CLOSE

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

// SCROLL ANIMATION

const sections = document.querySelectorAll(
    ".section, .skill-card, .project-card, .timeline-item"
);

sections.forEach(section => {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

sections.forEach(section => {
    observer.observe(section);
});

// ACTIVE NAVIGATION

const allSections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
