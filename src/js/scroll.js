const up = document.querySelector('.btn-up');
function addEventListener() {
    window.addEventListener('scroll', () => {

        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? up.classList.remove('is-hidden') : up.classList.add('is-hidden');
    });
    up.addEventListener('click', () => {
        window.scrollTo({
                top: 0,
                right: 0,
                behavior: 'smooth'
            })
     })
}
addEventListener();
