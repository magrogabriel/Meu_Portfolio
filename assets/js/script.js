// SWIPER CONFIGURATION
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true, 
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        860: {
            slidesPerView: 3,
        },
    },
});


// RESPONSIVE MENU
const btnMobile = document.querySelector("#btn-mobile");

function toggleMenu(event) {
    const nav = document.querySelector("#nav");
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu);


// HIDE MENU MOBILE WHEN CLICK ON LINK
const linkMenu = document.querySelectorAll("#menu li");

function hideMenu() {
    const nav = document.querySelector("#nav");
    nav.classList.remove('active');
}

for (let i = 0; i < linkMenu.length; i++) {
    linkMenu[i].addEventListener('click', hideMenu);
};




// ANIMATIONS
const target = document.querySelectorAll('[data-anime]');
const target1 = document.querySelectorAll('[data-anime1]');
const target2 = document.querySelectorAll('[data-anime2]');
const target3 = document.querySelectorAll('[data-anime3]');
const target4 = document.querySelectorAll('[data-anime4]');
const target5 = document.querySelectorAll('[data-anime5]');
const target6 = document.querySelectorAll('[data-anime6]');

window.sr = ScrollReveal({reset: true});

sr.reveal('.hidden1', {duration: 1000, reset: false, });
sr.reveal('.hidden1-left', {duration: 1000, reset: false, distance: '150px', origin: 'left'});
sr.reveal('.hidden1-right', {duration: 1000, reset: false, distance: '150px', origin: 'right'});
sr.reveal('.hidden2-left', {duration: 1000, delay: 400, reset: false, distance: '150px', origin: 'left'})
sr.reveal('.hidden2-right', {duration: 1000, delay: 400, reset: false, distance: '150px', origin: 'right'})
sr.reveal('.hidden2', {duration: 1000, delay: 400, reset: false})
sr.reveal('.hidden3', {duration: 1000, delay: 1000, reset: false})
sr.reveal('.hidden3-right', {duration: 1000, delay: 1000, distance: '100px', origin: 'right', reset: false})
sr.reveal('.hidden3-left', {duration: 1000, delay: 1000, distance: '100px', origin: 'left', reset: false})
sr.reveal('.hidden3-bottom', {duration: 1000, delay: 600, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden4-bottom', {duration: 1000, delay: 900, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden4', {duration: 1000, delay: 1000, reset: false})
sr.reveal('.hidden5-bottom', {duration: 1000, delay: 1200, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden6-bottom', {duration: 1000, delay: 1500, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden7-bottom', {duration: 1000, delay: 1800, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden8-bottom', {duration: 1000, delay: 2100, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden4', {duration: 1000, delay: 800, reset: false})


// EVENTS CONTACT
const linkedinIcon = document.querySelector("#icon-linkedin");
const envelopeIcon = document.querySelector("#icon-envelope");
const githubtIcon = document.querySelector("#icon-github");
const linkedinBox = document.querySelector("#linkedin-box");
const envelopeBox = document.querySelector("#envelope-box");
const githubBox = document.querySelector("#github-box");

linkedinBox.addEventListener('mouseover', () => {
    hoverLinks(linkedinIcon);
});

linkedinBox.addEventListener('mouseout', () => {
    notHoverLinks(linkedinIcon);
});

envelopeBox.addEventListener('mouseover', () => {
    hoverLinks(envelopeIcon);
});

envelopeBox.addEventListener('mouseout', () => {
    notHoverLinks(envelopeIcon);
});

githubBox.addEventListener('mouseover', () => {
    hoverLinks(githubtIcon);
});

githubBox.addEventListener('mouseout', () => {
    notHoverLinks(githubtIcon);
});


function hoverLinks(target) {
    target.style.color = '#F6985D';
}

function notHoverLinks(target) {
    target.style.color = '#AAA';
}


let navBar = document.querySelector("#header");

window.addEventListener('scroll')