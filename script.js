
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
});
