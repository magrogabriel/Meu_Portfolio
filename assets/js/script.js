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

window.sr = ScrollReveal({reset: true});

sr.reveal('.hidden1', {duration: 1000, reset: false });
sr.reveal('.hidden2-bottom', {duration: 1000, delay: 400, reset: false, distance: '150px', origin: 'bottom'})
sr.reveal('.hidden2', {duration: 1000, delay: 400, reset: false})
sr.reveal('.hidden3', {duration: 1000, delay: 800, reset: false})
sr.reveal('.hidden3-bottom', {duration: 1000, delay: 800, distance: '150px', origin: 'bottom', reset: false})
sr.reveal('.hidden4-bottom', {duration: 1000, delay: 1200, distance: '150px', origin: 'bottom', reset: false})
sr.reveal('.hidden4', {duration: 1000, delay: 1200, reset: false})
sr.reveal('.hidden5-bottom', {duration: 1000, delay: 1600, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden6-bottom', {duration: 1000, delay: 2000, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden7-bottom', {duration: 1000, delay: 2400, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden8-bottom', {duration: 1000, delay: 2800, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden9-bottom', {duration: 1000, delay: 3200, distance: '100px', origin: 'bottom', reset: false})
sr.reveal('.hidden10-bottom', {duration: 1000, delay: 3600, distance: '100px', origin: 'bottom', reset: false})


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



// RETURN BUTTON

const returnBtn = document.querySelector("#return a");
const descTop = document.querySelector(".top-links");

window.addEventListener('scroll', () => {
    console.log("window.pageYOffset = " + window.pageYOffset)
    console.log(descTop.offsetTop)
    if (window.pageYOffset > descTop.offsetTop) {
        returnBtn.classList.add("active");
    } else {
        returnBtn.classList.remove("active");
    }
});

returnBtn.addEventListener("mouseover", () => {
    returnBtn.style.opacity = "1";
})
returnBtn.addEventListener("mouseout", () => {
    returnBtn.style.opacity = ".5";
})

returnBtn.addEventListener("mouseup", () => {
    returnBtn.style.opacity = ".5";
})