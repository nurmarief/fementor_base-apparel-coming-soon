import './images/index';
import './styles/_index.scss';

const newsletterSubscribeFormElement = document.querySelector(
  '.newsletter-subscribe-form'
);

newsletterSubscribeFormElement.addEventListener('submit', e => {
  e.preventDefault();
  const emailPatternValidation =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const emailInputElement = e.target[0];
  const emailFormControlElement = emailInputElement.parentElement;
  const emailErrorMessageElement = emailFormControlElement.nextElementSibling;
  const emailErrorIconElement = emailInputElement.nextElementSibling;
  const isEmailMatch = emailPatternValidation.test(emailInputElement.value);

  if (isEmailMatch) {
    emailErrorIconElement.classList.add(
      'newsletter-subscribe-form__error-icon_is-hidden'
    );
    emailErrorMessageElement.classList.add(
      'newsletter-subscribe-form__error-msg_is-hidden'
    );
    emailFormControlElement.classList.remove(
      'newsletter-subscribe-form__form-control-is-error'
    );
  } else {
    emailErrorIconElement.classList.remove(
      'newsletter-subscribe-form__error-icon_is-hidden'
    );
    emailFormControlElement.classList.add(
      'newsletter-subscribe-form__form-control-is-error'
    );
    emailErrorMessageElement.classList.remove(
      'newsletter-subscribe-form__error-msg_is-hidden'
    );
  }
});
