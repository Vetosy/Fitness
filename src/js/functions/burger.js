(function () {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const menuItems = document.querySelectorAll('[data-menu-item]');
  const overlay = document.querySelector('[data-menu-overlay]');

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');
    overlay.classList.toggle('overlay--active');

    if (menu.classList.contains('header__nav--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close menu');
      scrollController.disableScroll();
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
      scrollController.enableScroll();
    }
  });

  overlay.addEventListener('click', () => {
    closeMenu();
  });

  menuItems.forEach(el => {
    el.addEventListener('click', () => {
      closeMenu();
    });
  });

  const closeMenu = () => {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    overlay.classList.remove('overlay--active');
    scrollController.enableScroll();
  };

  const scrollController = {
    disableScroll() {
      const paddingOffset = document.documentElement.clientWidth - document.body.offsetWidth;
      document.body.style.cssText = `
        overflow: hidden;
        padding-right: ${paddingOffset}px;
      `;
      document.body.style.scrollBehavior = 'unset';
    },
    enableScroll() {
      document.body.style.cssText = '';
      document.body.style.scrollBehavior = '';
    }
  };
})();
