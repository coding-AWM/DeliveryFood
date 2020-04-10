const cartButton = document.querySelector('#shoping-cart');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close-modal');
function toggleModal () {
    modal.classList.toggle("modal-active")
}

cartButton.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);

new WOW().init();