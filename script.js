// Lógica para el modo oscuro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

// Animación con anime.js
const buttons = document.querySelectorAll('.resource-button');

anime({
    targets: buttons,
    translateY: [-50, 0], // Mueve los botones de -50px a 0px en Y
    opacity: [0, 1],
    duration: 800,
    delay: anime.stagger(100), // Retraso de 100ms entre cada botón
    easing: 'easeOutQuad'
});

// Animación al hacer hover
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        anime({
            targets: button,
            scale: 1.05,
            duration: 200,
            easing: 'easeOutSine'
        });
    });

    button.addEventListener('mouseleave', () => {
        anime({
            targets: button,
            scale: 1,
            duration: 200,
            easing: 'easeOutSine'
        });
    });
});

