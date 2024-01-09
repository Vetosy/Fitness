export const popupMessageForm = (title, text) => {
  const successModal = document.querySelector('.success');
  const successTitle = successModal?.querySelector('.success__title');
  const successText = successModal?.querySelector('.success__text');

  if (successModal && successTitle && successText) {
    successTitle.textContent = title;
    successText.textContent = text;
    successModal.style.opacity = '1';
    successModal.style.visibility = 'visible';
  }

  setTimeout(() => {
    successModal.style.opacity = '0';
    successModal.style.visibility = 'hidden';
  }, 2000);
};
