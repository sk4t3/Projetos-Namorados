// 🎶 Controle da música
const music = document.getElementById('music');
const toggleMusic = document.getElementById('toggleMusic');

toggleMusic.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggleMusic.textContent = '🔊';
    } else {
        music.pause();
        toggleMusic.textContent = '🔇';
    }
});

// 🚀 Enviar orçamento via Instagram (abre perfil)
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const projeto = document.getElementById('projeto').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá! Me chamo ${nome}. Quero um site do tipo: ${projeto}. ${mensagem}`;

    alert('Perfeito! Clique em "Enviar mensagem" no Instagram e envie seu orçamento!');

    // Abre seu perfil no Instagram
    window.open('https://instagram.com/seu_usuario', '_blank');
});
