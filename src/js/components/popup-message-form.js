export const popupMessageForm = (title, text) => {
  const successModal = document.querySelector('.success');
  const successTitle = successModal?.querySelector('.success__title');
  const successText = successModal?.querySelector('.success__text');
  const successCloseButton = successModal?.querySelector('.success__btn');

  if (successModal && successTitle && successText) {
    successTitle.textContent = title;
    successText.textContent = text;
    successModal.style.opacity = '1';
    successModal.style.visibility = 'visible';

    if (successCloseButton) {
      successCloseButton.addEventListener('click', () => {
        successModal.style.opacity = '0';
        successModal.style.visibility = 'hidden';
      });
    }
  }
};
