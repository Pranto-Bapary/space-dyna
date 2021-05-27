/*---------------
Preloader
--------------*/
$(window).on('load', function () {
    $('.preloader').fadeOut('slow');
});

/*----------------------
Navigation On Scroll
-----------------------*/
window.addEventListener('scroll', () => {
    const navBar = document.querySelector('nav');
    var navList = document.querySelector('.navbar-list');
    navBar.classList.toggle('sticky', window.scrollY > 250);
    navList.classList.toggle('active', window.scrollY > 250)
});


/*------------------
Hamburger Menu
 ------------------*/
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
});

/*---------------
Navbar Toggle
--------------*/
var navToggle = document.querySelector('.nav-toggle');
var navList = document.querySelector('.navbar-list');
var navOpen = false;
navToggle.addEventListener('click', () => {
    if (!navOpen) {
        navList.classList.add('show');
        navOpen = true;
    } else {
        navList.classList.remove('show');
        navOpen = false;
    }
});

/*---------------
One Page Nav
--------------*/
$('#navbar-list').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 500,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function () {
        //I get fired when the animation is starting
    },
    end: function () {
        //I get fired when the animation is ending
    },
    scrollChange: function ($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});