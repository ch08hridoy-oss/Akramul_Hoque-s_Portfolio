/* ========================================
   HOME DROPDOWN NAVIGATION
======================================== */

// Close dropdown after clicking a section link
document.querySelectorAll('.topbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const dropdown = link.closest('.topbar-dropdown');

        if (dropdown) {
            dropdown.open = false;
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    document.querySelectorAll('.topbar-dropdown').forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.open = false;
        }
    });
});

// Close dropdown with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelectorAll('.topbar-dropdown').forEach(dropdown => {
            dropdown.open = false;
        });
    }
});


/* ========================================
   CONTACT FORM
======================================== */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const subject = document.getElementById('subject')?.value || '';
        const message = document.getElementById('message')?.value.trim() || '';

        const formNote = document.getElementById('form-note');

        if (formNote) {
            formNote.textContent = 'Opening your email app...';
        }

        const mailSubject = encodeURIComponent(
            'Portfolio inquiry: ' + subject
        );

        const mailBody = encodeURIComponent(
            'Name: ' + name +
            '\nEmail: ' + email +
            '\nSubject: ' + subject +
            '\n\n' + message
        );

        window.location.href =
            'mailto:hridoyakramulhouqe@gmail.com' +
            '?subject=' + mailSubject +
            '&body=' + mailBody;
    });
}
