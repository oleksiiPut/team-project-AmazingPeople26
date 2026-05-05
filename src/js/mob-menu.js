(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Закрити меню при кліку на будь-яке посилання всередині модалки,
  // щоб юзер міг перейти до секції під бекдропом
  refs.modal.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link && refs.modal.contains(link)) {
      refs.modal.classList.remove("is-open");
    }
  });

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();
