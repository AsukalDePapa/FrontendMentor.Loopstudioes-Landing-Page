const menu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const nav = document.getElementById('nav')

menu.addEventListener('click', () => {
    nav.classList.add('toggle-nav');
})

closeMenu.addEventListener('click', () => {
    nav.classList.remove('toggle-nav');
})