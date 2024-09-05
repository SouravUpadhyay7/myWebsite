document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.content').classList.add('slide-in-left');
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
