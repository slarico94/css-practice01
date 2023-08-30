const backdropEl = document.querySelector('.backdrop');
const modalEl = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.button');
const closeBtnEl = document.querySelector('.modal__action--negative');
const toggleBtnEl = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

closeBtnEl?.addEventListener('click', closeModal);
backdropEl.addEventListener('click', closeModal)

selectPlanButtons?.forEach(btn => btn.addEventListener('click', showModal));

toggleBtnEl.addEventListener('click', function () {
   // mobileNav.style.display = 'block';
   // backdropEl.style.display = 'block';
   //  modalEl.className = 'open'; //This will override the complete element class
    mobileNav.classList.add('open');
    backdropEl.classList.add('open');
});

function showModal() {
    modalEl.classList.add('open');
    backdropEl.classList.add('open');
}

function closeModal() {
    /*backdropEl.style.display = 'none';
    modalEl.style.display = 'none';
    mobileNav.style.display = 'none';*/
    modalEl?.classList.remove('open');
    backdropEl.classList.remove('open');
    mobileNav.classList.remove('open');
}

// backdropEl.style.backgroundColor = 'red';

console.dir(backdropEl);

