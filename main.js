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

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.querySelector('.overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    } )
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = button.closest('.modal')
        closeModal(modal)
    } )
})

function openModal(modal){
    if(modal==null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal){
    if(modal==null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}