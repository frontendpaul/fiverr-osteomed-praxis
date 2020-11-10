// Modal handler
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
  });
}

for (const closeBtn of closeBtns) {
  closeBtn.addEventListener('click', () => {
    closeModal();
  });
}