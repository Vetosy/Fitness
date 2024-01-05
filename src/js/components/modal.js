const modal = document.querySelector('.js-modal')
const openModal = document.querySelector('.js-open-modal')
const closeModal = document.querySelector('.js-close-modal')

openModal.addEventListener('click', () => {
  modal.showModal()
})

closeModal.addEventListener('click', () => {
  modal.close()
})

modal.addEventListener('click', (e) => {
  const dialogModal = e.currentTarget
  const isClickedOnBackDrop = e.target === dialogModal

  if (isClickedOnBackDrop) {
    dialogModal.close()
  }
})
