// Lógica para el modo oscuro con persistencia en localStorage
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Función para aplicar el tema según localStorage
function applySavedTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.checked = true;
        }
    } else {
        body.classList.remove('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.checked = false;
        }
    }
}

// Aplicar el tema guardado al cargar la página
applySavedTheme();

// Event listener solo si existe el toggle en la página
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('change', () => {
        const isDarkMode = themeToggleBtn.checked;
        body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    });
}

// Animación con anime.js (solo si la librería está cargada)
if (typeof anime !== 'undefined') {
    const buttons = document.querySelectorAll('.resource-button');

    if (buttons.length > 0) {
        anime({
            targets: buttons,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutQuad'
        });

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
    }
}
