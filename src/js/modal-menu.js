const refs = {
    menuBtnOpen: document.querySelector('.hero__btn-menu'),
    menuBtnClose: document.querySelector('.menu__btn-cross'),
    menu:document.querySelector('.mob-menu'),
}
refs.menuBtnOpen.addEventListener('click', openMenu);
refs.menuBtnClose.addEventListener('click', openMenu);
function openMenu() {
    refs.menu.classList.toggle('is-hidden');
}