

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(r => {
        const windowHeight = window.innerHeight;
        const elementTop = r.getBoundingClientRect().top;
        const visible = 150;
        if (elementTop < windowHeight - visible) {
            r.classList.add('active');
        } else {
            r.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();

// 🌗 Modo Escuro / Claro com Animação
const toggleDark = document.getElementById('toggleDark');

toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Troca o emoji do botão
    if (document.body.classList.contains('dark-mode')) {
        toggleDark.textContent = '☀️';
    } else {
        toggleDark.textContent = '🌓';
    }

    // Animação no clique
    toggleDark.classList.add('clicked');
    setTimeout(() => {
        toggleDark.classList.remove('clicked');
    }, 600);
});



