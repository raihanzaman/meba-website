// This is an event listener for the mailing list submission
const mailing = document.querySelector('form#mailingList');

mailing.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const emailInput = document.querySelector('input[name="email"]'); // Need to review this
  const email = emailInput.value.trim();

  alert(`Thank you for subscribing with ${email}!`);
  emailInput.value = ''; // Clear the input field
});