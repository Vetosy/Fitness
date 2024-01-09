import JustValidate from 'just-validate';
import { popupMessageForm } from './popup-message-form';

const showSuccessModal = (event) => {
  const formEntries = new FormData(event.target).entries();
  const json = Object.assign(
    ...Array.from(formEntries, ([x, y]) => ({
      [x]: y,
    }))
  );

  fetch('https://my-json-server.typicode.com/Vetosy/testserver/comments', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      popupMessageForm('Success!', 'The form has been successfully submitted. Thank you!');
      event.target.reset();
      headerModalValidation.refresh();
    })
    .catch((error) => {
      popupMessageForm('Error', 'An error occurred. Please try again later.');
      event.target.reset();
      console.error(error);
      headerModalValidation.refresh();
    });
};

const headerModalValidation = new JustValidate('#header-modal-form', {
  validateBeforeSubmitting: true,
  tooltip: {
    position: 'bottom',
  },
});

headerModalValidation
  .addField('#modal-username', [
    {
      rule: 'required',
      errorMessage: 'Enter your name',
    },
    {
      rule: 'minLength',
      value: 2,
    },
  ])
  .addField('#modal-email', [
    {
      rule: 'required',
      errorMessage: 'Enter your email',
    },
    {
      rule: 'email',
    },
  ])
  .onSuccess((event) => {
    showSuccessModal(event);
  });
