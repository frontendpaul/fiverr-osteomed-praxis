const menuToggleBtn = document.querySelector('.js-menu-toggle');
const menuToggleIcon = document.querySelector('.js-menu-toggle-icon');
const navContainer = document.querySelector('.js-nav');
const submenuToggleBtn = document.querySelector('.js-dropdown-menu');
const submenuContainer = document.querySelector('.js-submenu');

menuToggleBtn.addEventListener('click', (e) => {
  menuToggleIcon.classList.toggle('is-active');
  navContainer.classList.toggle('is-active');
})

submenuToggleBtn.addEventListener('click', () => {
  submenuContainer.classList.toggle('is-active');
})