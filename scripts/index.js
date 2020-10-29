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


const unfoldToggleBtn = document.querySelector('.js-toggle-unfold');
const unfoldToggleBtnText = document.querySelector('.js-toggle-unfold>span');
const unfoldText = document.querySelector('.js-unfold-text');

unfoldToggleBtn.addEventListener('click', () => {
  unfoldText.classList.toggle('is-active');
  unfoldToggleBtn.classList.toggle('is-active');

  if (unfoldToggleBtn.classList.contains('is-active')) {
    unfoldToggleBtnText.innerText = 'Weniger';
  } else {
    unfoldToggleBtnText.innerText = 'Alles anzeigen';
  }
})