import { disableScroll } from '../functions/disable-scroll'
import { enableScroll } from '../functions/enable-scroll'

const modal = document.querySelector('.js-modal')
const openModal = document.querySelector('.js-open-modal')
const closeModal = document.querySelector('.js-close-modal')

openModal.addEventListener('click', () => {
  modal.showModal()
  disableScroll()
})

closeModal.addEventListener('click', () => {
  modal.close()
  enableScroll()
})

modal.addEventListener('click', (e) => {
  const dialogModal = e.currentTarget
  const isClickedOnBackDrop = e.target === dialogModal

  if (isClickedOnBackDrop) {
    dialogModal.close()
    enableScroll()
  }
})
