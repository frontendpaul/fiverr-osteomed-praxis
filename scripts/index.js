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



// Hero Cards animations
const toggleCardAnimation = function() {
  const heroCards = document.querySelectorAll('.hero-cards .card');
  for (const heroCard of heroCards) {
    heroCard.classList.toggle('is-loaded');
  }
}

window.onload = () => toggleCardAnimation();



// Ufold text handler
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



// Form paginator handler
const formNavigationHandler = function (id, parentId) {
  const idNumber = parseInt(id.match(/\d+/));
  document.querySelector(`#${parentId} .contact-slide-${idNumber}`).classList.toggle('is-active');
  document.querySelector(`#${parentId} .contact-slide-${idNumber+1}`).classList.toggle('is-active');
  document.querySelector(`#${parentId} .paginator-item-${idNumber}`).classList.toggle('is-filled');
  document.querySelector(`#${parentId} .paginator-item-${idNumber+1}`).classList.toggle('is-active');
}

// Next Form Button Handler
const formNextBtns = document.querySelectorAll('.js-form-btn-next');
for (const formNextBtn of formNextBtns) {
  formNextBtn.addEventListener('click', (e) => {
    const parentId = e.target.closest('.contact-container').id;
    formNavigationHandler(e.target.id, parentId);
  });
}
// Previous Form Button Handler
const formPrevBtns = document.querySelectorAll('.js-form-btn-prev');
for (const formPrevBtn of formPrevBtns) {
  formPrevBtn.addEventListener('click', (e) => {
    const parentId = e.target.closest('.contact-container').id;
    formNavigationHandler(e.target.id, parentId);
  });
}