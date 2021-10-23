const mainMenu = document.querySelector('.nav-items');
const openMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '60px';
}

function close(){
    mainMenu.style.display = 'none';
}
