(() => {
  // 1. Створюємо об'єкт refs для зберігання посилань на HTML-елементи, щоб усі вони були в одному місці.
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuLinks: document.querySelectorAll('[data-menu] a[href^="#"]'),
  };

  // 2. Призначаємо кнопкам дію перемикання стану меню: воно буде показуватися або ховатися при кліку.
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  // 3. Для кожного посилання в меню налаштовуємо логіку, яка забезпечує миттєвий перехід до потрібного розділу.
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // 3а. ЗУПИНЯЄМО smooth-scroll.js (скасовуємо стандартну поведінку посилання)
      e.preventDefault(); 

      // 3б. Дізнаємося, куди саме потрібно потрапити
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // 3в. Спочатку миттєво закриваємо меню
        removeMenu();

        // 3г. Розраховуємо точне положення секції на сторінці
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

        // 3д. СТРИБАЄМО миттєво (behavior: 'auto' ігнорує будь-яку плавність)
        window.scrollTo({
          top: targetPosition,
          behavior: 'auto'
        });
      }
    });
  });

  // 4. Створюємо функцію-перемикач, яка одночасно керує видимістю меню та скролом фону.
  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }

  // 5. Функція для повного закриття: вона прибирає меню та повертає можливість скролу після вибору розділу.
  function removeMenu() {
    refs.menu.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
  }
})();