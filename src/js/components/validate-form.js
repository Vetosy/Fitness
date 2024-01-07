import { popupMessageForm } from '../components/popup-message-form';
// import IMask from 'imask';
import JustValidate from 'just-validate';

const headerModalValidation = new JustValidate('#header-modal-form');
// const telInputPizzaLunch = document.getElementById('pizza-lunch-tel');
// const telMaskPizzaLunch = IMask(telInputPizzaLunch, {
//   mask: '(000) 000-0000',
// });

// const zipInputPizzaLunch = document.getElementById('pizza-lunch-zip');
// zipInputPizzaLunch.addEventListener('input', function () {
//   const value = zipInputPizzaLunch.value.replace(/\D/g, '');

//   if (value.length > 5) {
//     zipInputPizzaLunch.value = value.slice(0, 5);
//   } else {
//     zipInputPizzaLunch.value = value;
//   }
// });

function showSuccessMessage(event) {
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
    })
    .catch((error) => {
      popupMessageForm('Error', 'An error occurred. Please try again later.');
      event.target.reset();
      console.error(error);
    });
}

headerModalValidation.onSuccess(showSuccessMessage);

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
  ]);
