document.addEventListener('DOMContentLoaded', () => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const navListRef = document.querySelector('.navigation__list');
  const headerRef = document.querySelector('.header');
  const navigationRef = document.querySelector('.navigation'); 

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    navListRef.classList.toggle('is-open');
    headerRef.classList.toggle('is-open');
    navigationRef.classList.toggle('is-open'); 
  });

  document.querySelectorAll('.navigation__link').forEach((n) =>
    n.addEventListener('click', () => {
      navListRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
      headerRef.classList.remove('is-open');
      navigationRef.classList.remove('is-open'); 
    })
  );
});

  function showBefore() {
      document.getElementById('image').src = '/image/advantages/image before.png';
      document.getElementById('image').alt = 'Before';
    }

    function showAfter() {
      document.getElementById('image').src = '/image/advantages/image after.png';
      document.getElementById('image').alt = 'After';
    }









