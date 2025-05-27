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

// Mensagem no console
console.log("🚀 Site criado pelo aluno do 3º DS com muito carinho!");

// 🎯 Enviar orçamento direto no Direct do Instagram
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const projeto = document.getElementById('projeto').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = encodeURIComponent(`Olá! Me chamo ${nome}. Estou interessado em um site ${projeto}. ${mensagem}`);
    
    // Link para o direct do Instagram
    const link = `https://instagram.com/direct/t/@3ds_santao`;

    alert("Sua mensagem será enviada para nosso Instagram! Clique em OK.");
    window.open(link, '_blank');
});

