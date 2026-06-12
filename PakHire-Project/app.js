const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', function () {

    // Menu toggle karo
    navLinks.classList.toggle('open');

    // Icon change karo — bars se X
    if (navLinks.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Kisi link pe click karo toh menu band ho
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});