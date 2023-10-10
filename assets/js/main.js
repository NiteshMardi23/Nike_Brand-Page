// ================ SHOW MENU ===============

const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close');


// ========== MENU SHOW ==========

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show_menu');
    })
}

// ========== MENU CLOSE ==========

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu');
    })
}

// ============ Remove Mobile menu after clicking ==========

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ================== SWiper ==================

let swiperShoes = new Swiper('.home_swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev:{
            translate: [-100, 0, -500],
            opacity:0,
        },
        next:{
            translate: [-100, 0, -500],
            opacity:0,
        },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });


// ================ Shadow Header =====================
 
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrolly >= 50 ? header.classList.add('shadow-header')
                                   :
                         header.classList.remove('shadow-header')
}

window.addEventListener('scroll',shadowHeader);