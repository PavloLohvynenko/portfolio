const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      clouse = document.querySelector('.menu__clouse');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});      
clouse.addEventListener('click', () => {
    menu.classList.remove('active');
}); 