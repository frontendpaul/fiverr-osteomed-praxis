// Mobile Menu Toggler Handler
const menuToggleBtn = document.querySelector('.js-menu-toggle');
const menuToggleIcon = document.querySelector('.js-menu-toggle-icon');
const navContainer = document.querySelector('.js-nav');

menuToggleBtn.addEventListener('click', (e) => {
  menuToggleIcon.classList.toggle('is-active');
  navContainer.classList.toggle('is-active');
})

// Submenu Handler
const submenuToggleBtn = document.querySelector('.js-dropdown-menu');
const submenuContainer = document.querySelector('.js-submenu');

submenuToggleBtn.addEventListener('click', () => {
  submenuContainer.classList.toggle('is-active');
})

// 
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


const formNavigationHandler = function(id) {
  // Get Id of clicked element and parse integer of it
  const idNumber = parseInt(id.match(/\d+/));
  // Toggle visibility of current slide
  document.querySelector(`.contact-slide-${idNumber}`).classList.toggle('is-active');
  // Toggle visibility of next slide
  document.querySelector(`.contact-slide-${idNumber+1}`).classList.toggle('is-active');
  // Toggle fill effect of paginator
  document.querySelector(`.paginator-item-${idNumber}`).classList.toggle('is-filled');
  // Toggle marking fo paginator
  document.querySelector(`.paginator-item-${idNumber+1}`).classList.toggle('is-active');
}

// Next Form Button Handler
const formNextBtns = document.querySelectorAll('.js-form-btn-next');
for (const formNextBtn of formNextBtns) {
  formNextBtn.addEventListener('click', (e) => {
    formNavigationHandler(e.target.id);
  });
}
// Previous Form Button Handler
const formPrevBtns = document.querySelectorAll('.js-form-btn-prev');
for (const formPrevBtn of formPrevBtns) {
  formPrevBtn.addEventListener('click', (e) => {
    formNavigationHandler(e.target.id);
  });
}