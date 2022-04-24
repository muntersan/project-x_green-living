// gives the header and drop down menu a background when scrolled down
const headerScroll = () => {

    const header = document.querySelector('.header')  
    const dropDown = document.querySelector('.menu__dropdown')
    const menuList = document.querySelector('.menu__list')

    const addClass = ()  => {
        if (window.scrollY > 150) {
            header.classList.add('header--scrolled')
            dropDown.classList.add('menu__dropdown--scrolled')
            menuList.classList.add('menu__list--scrolled')

        } else {
            header.classList.remove('header--scrolled')
            dropDown.classList.remove('menu__dropdown--scrolled')
            menuList.classList.remove('menu__list--scrolled')

        }
    }
    
    window.addEventListener('scroll', addClass)
}

headerScroll()


const menu = () => {
    
    //get elements from DOM
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.menu')

    //open menu finction
    const openMenu = () => {

        //add class to button
        menuButton.classList.toggle('menu-button--close')

        //add class to menu 
        menu.classList.toggle('menu--opened')
    }
    menuButton.addEventListener('click', openMenu)
}


menu();



