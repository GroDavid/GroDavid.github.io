const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navbarLogo = document.querySelector('#navbar__logo')

//Display Mobile menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    console.log(scrollPos)



    if(window.innerWidth > 960){    // not mobile website
        if(window.innerWidth < 1100 && scrollPos < 355){    //web site when services in 2 columns
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
        }else if(window.innerWidth < 1100 && scrollPos < 1516){
            aboutMenu.classList.add('highlight')
            homeMenu.classList.remove('highlight')
            servicesMenu.classList.remove('highlight')
            return 
        }else if(window.innerWidth < 1100 && scrollPos < 2555){
            aboutMenu.classList.remove('highlight')
            servicesMenu.classList.add('highlight')
            return 
        }
        if(window.innerWidth < 1200 && scrollPos < 355){    //web site when pictures above text
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
        }else if(window.innerWidth < 1200 && scrollPos < 907){
            aboutMenu.classList.add('highlight')
            homeMenu.classList.remove('highlight')
            servicesMenu.classList.remove('highlight')
            return 
        }else if(window.innerWidth < 1200 && scrollPos < 2555){
            aboutMenu.classList.remove('highlight')
            servicesMenu.classList.add('highlight')
            return 
        }
        if(window.innerWidth > 1300 && scrollPos < 375){    // website when everything normal
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
        }else if(window.innerWidth > 1300 && scrollPos < 1065){
            aboutMenu.classList.add('highlight')
            homeMenu.classList.remove('highlight')
            servicesMenu.classList.remove('highlight')
            return 
        }else if(window.innerWidth > 1300 && scrollPos < 2000){
            aboutMenu.classList.remove('highlight')
            servicesMenu.classList.add('highlight')
            return 
        }
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navbarLogo.addEventListener('click', hideMobileMenu)