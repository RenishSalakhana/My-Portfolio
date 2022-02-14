// adding active class to the links

const sections = document.querySelectorAll("div .section");
const navItems = document.querySelectorAll("nav div a");

const skillsSection = document.querySelector("#skills");
const techSkills = document.querySelectorAll(".tech-skill .bar span")
const proSkills = document.querySelectorAll(".pro-skill .circular circle")



window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    })

    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.classList.contains(current)) {
            item.classList.add("active")
        }
    })

})


// navbar slide animation

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    burger.addEventListener("click", () => {
        console.log("clicked");
        nav.classList.toggle("slideNavbar");
        burger.classList.toggle("toggle");

        navLinks.forEach((link) => {
            link.classList.toggle("navLinksFade");
        })

    });



}

navSlide();