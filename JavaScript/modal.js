const openModalBtn = document.getElementById('openModalBtn')
const modalOverlay = document.getElementById('modalOverlay')
const modal = document.getElementById('modal')
const modalClose = modal.querySelector('#modalClose')


function handleOpenModal() {
    modalOverlay.classList.add('opened')
    modal.classList.add('opened')
}

function handleCloseModal() {
    modalOverlay.classList.remove('opened')
    modal.classList.remove('opened')
}

openModalBtn.addEventListener('click', handleOpenModal)
modalClose.addEventListener('click', handleCloseModal)