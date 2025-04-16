// This is an event listener for the mailing list submission
const mailing = document.querySelector('form#mailing-list');

mailing.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const emailInput = document.querySelector('input[name="email"]'); // Need to review this
  const email = emailInput.value.trim();

  alert(`Thank you for subscribing with ${email}!`);
  emailInput.value = ''; // Clear the input field
});

// Navbar selector
const home_nav = document.querySelector('li#home');
const eboard_nav = document.querySelector('li#eboard');
const application_nav = document.querySelector('li#application');
const game_nav = document.querySelector('li#game');

// 
const home = document.querySelector('div#home');
const eboard = document.querySelector('div#eboard');
const application = document.querySelector('div#application');
const game = document.querySelector('div#game');

home_nav.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  home.classList.remove('hidden')
  eboard.classList.add('hidden')
  application.classList.add('hidden')
  game.classList.add('hidden')
})

eboard_nav.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  eboard.classList.remove('hidden')
  home.classList.add('hidden')
  application.classList.add('hidden')
  game.classList.add('hidden')
})

application_nav.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  application.classList.remove('hidden')
  home.classList.add('hidden')
  eboard.classList.add('hidden')
  game.classList.add('hidden')
})

game_nav.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  game.classList.remove('hidden')
  home.classList.add('hidden')
  eboard.classList.add('hidden')
  application.classList.add('hidden')
})
