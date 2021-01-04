/* --======= SHOW MENU ======== */
const showMenu = ( toggleId,navId )=>{
    const toggle = document.getElementById( toggleId );
    const nav = document.getElementById( navId );

    //Validate that variants exist
    if( toggle && nav ){
        toggle.addEventListener( 'click',()=>{
            //we add the show-menu class to the div tag width the nav__menu class
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle','nav-menu');

/* --======= REMOVE MENU MOBILE ======== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //When we click on each nav__link , we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
//Go through each label and apply the linkaction function
navLink.forEach(element => element.addEventListener('click',linkAction));

/* --======= SCROLL SECTIONS ACTIVE LINK ======== */

const sections = document.querySelectorAll('section');
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll',scrollActive);


/* --======= CHANGE BACKGROUND HEADER ======== */
function scrollHeader(){
    const nav = document.getElementById('header');
        //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 140){
            nav.classList.add('scrool-header');
        }else{
            nav.classList.remove('scrool-header');
        }
}
window.addEventListener('scroll',scrollHeader);

/* --======= SHOW SCROLL TOP ======== */

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    //when the scroll is higher than 650 viewport, add the show-scroll to the a tag with the scroll-top class
    if (this.scrollY >= 460) {
        scrollTop.classList.add('show-scroll');
    }else{
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollTop);


/* --======= DARK LIGTH THEME ======== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-toggle-right';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-toggle-left' : 'bxs-toggle-right';

//We validate if the user previously chose a topic
if(selectedTheme){
    //If the Validation is fulfilled, we ask what the issue was to know if we activated or desactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bxs-toggle-left' ? 'add':'remove'](iconTheme);
}
//Activate / desactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //Add or remove the dark and icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //We save the theme and the current icon that the user chose
    localStorage.setItem('selectedTheme',getCurrentTheme());
    localstorage.setItem('selectedIcon',getCurrentIcon());
})


/* --======= SCROLL REVEAL ANIMATION ======== */

const slideUp = {
    origin:'top',
    distance:'30px',
    duration:'2000',
    reset:true
};

ScrollReveal().reveal(`.home__data,
                        .home__img,
                        .decoration__data,
                        .accessory__content,
                        .footer__content`, slideUp);

ScrollReveal().reveal(`.share__img, .send__content`, {...slideUp,origin:'left'});
ScrollReveal().reveal(`.share__data, .send__img`, {...slideUp,origin:'right'});
