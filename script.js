const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

if (menu && nav) {

    // Mobile menu open / close
    menu.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menu.setAttribute('aria-expanded', isOpen);
    });

    // Close menu after clicking any navigation link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {

            nav.classList.remove('open');
            menu.setAttribute('aria-expanded', 'false');

            // Close Home dropdown
            const dropdown = link.closest('.home-dropdown');

            if (dropdown) {
                dropdown.open = false;
            }
        });
    });
}
