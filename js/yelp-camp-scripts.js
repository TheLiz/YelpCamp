const toggleMenu = document.querySelector('.nav__toggle');
const menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;

  if (!menu.hidden) {
    menu.querySelector('a').focus();
  }
});