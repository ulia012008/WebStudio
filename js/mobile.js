(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  const mobileRefs = {
    openBtn: document.querySelector('[data-mobile-open]'),
    closeBtn: document.querySelector('[data-mobile-close]'),
    menu: document.querySelector('[data-mobile]'),
    links: document.querySelectorAll('[data-mobile] a'), // усі лінки в меню
  };

  if (mobileRefs.openBtn && mobileRefs.closeBtn && mobileRefs.menu) {
    mobileRefs.openBtn.addEventListener('click', () => {
      mobileRefs.menu.classList.add('is-open');
    });

    mobileRefs.closeBtn.addEventListener('click', () => {
      mobileRefs.menu.classList.remove('is-open');
    });

    // Закривати меню при кліку на будь-яке посилання
    mobileRefs.links.forEach(link => {
      link.addEventListener('click', () => {
        mobileRefs.menu.classList.remove('is-open');
      });
    });
  }
})();
