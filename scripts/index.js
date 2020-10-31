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


const nextFormBtn1 = document.querySelector('.js-form-btn-next-1');
const nextFormBtn2 = document.querySelector('.js-form-btn-next-2');
const prevFormBtn1 = document.querySelector('.js-form-btn-prev-1');
const prevFormBtn2 = document.querySelector('.js-form-btn-prev-2');
const formSlide1 = document.querySelector('.contact-slide-1');
const formSlide2 = document.querySelector('.contact-slide-2');
const formSlide3 = document.querySelector('.contact-slide-3');
const paginatorItem1 = document.querySelector('.paginator-item-1');
const paginatorItem2 = document.querySelector('.paginator-item-2');
const paginatorItem3 = document.querySelector('.paginator-item-3');

nextFormBtn1.addEventListener('click', () => {
  formSlide1.classList.toggle('is-active');
  formSlide2.classList.toggle('is-active');
  paginatorItem1.classList.toggle('is-filled');
  paginatorItem2.classList.toggle('is-active');
})

nextFormBtn2.addEventListener('click', () => {
  formSlide2.classList.toggle('is-active');
  formSlide3.classList.toggle('is-active');
  paginatorItem2.classList.toggle('is-filled');
  paginatorItem3.classList.toggle('is-active');
})

prevFormBtn1.addEventListener('click', () => {
  formSlide1.classList.toggle('is-active');
  formSlide2.classList.toggle('is-active');
  paginatorItem1.classList.toggle('is-filled');
  paginatorItem2.classList.toggle('is-active');
})

prevFormBtn2.addEventListener('click', () => {
  formSlide2.classList.toggle('is-active');
  formSlide3.classList.toggle('is-active');
  paginatorItem2.classList.toggle('is-filled');
  paginatorItem3.classList.toggle('is-active');
})