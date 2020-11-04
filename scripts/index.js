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


const formNavigationHandler = function (id, parentId) {
  // Get Id of clicked element and parse integer of it
  const idNumber = parseInt(id.match(/\d+/));
  // Toggle visibility of current slide
  document.querySelector(`#${parentId} .contact-slide-${idNumber}`).classList.toggle('is-active');
  // Toggle visibility of next slide
  document.querySelector(`#${parentId} .contact-slide-${idNumber+1}`).classList.toggle('is-active');
  // Toggle fill effect of paginator
  document.querySelector(`#${parentId} .paginator-item-${idNumber}`).classList.toggle('is-filled');
  // Toggle marking fo paginator
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



const modalContainer = document.querySelector('.modal-container');
const ctaBtns = document.querySelectorAll('.js-cta-btn');
const closeBtns = document.querySelectorAll('.close-btn');

function openModal() {
  modalContainer.classList.toggle('is-active');

  // This prevents the body to be scrollable
  let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalContainer.classList.toggle('is-active');

  document.body.style.margin = '';
  document.body.style.overflow = '';
}

for (const ctaBtn of ctaBtns) {
  ctaBtn.addEventListener('click', () => {
    openModal(); 
    console.log('open');
  });
}

for (const closeBtn of closeBtns) {
  closeBtn.addEventListener('click', () => {
    closeModal();
    console.log('close');
  });
}