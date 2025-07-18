document.addEventListener('DOMContentLoaded', () => {
    const frames = [];
    for (let i = 1; i <= 35; i++) {
        const frame = document.getElementById(`frame${i}`);
        if (frame) {
            frames.push(frame);
        }
    }

    if (frames.length === 0) {
        console.warn('Nenhum frame SVG encontrado. Verifique os IDs.');
        return;
    }

    // Seleciona a palavra "iMage" pela classe .logo-text
    const container = document.querySelector('.logo-text');

    if (!container) {
        console.warn('Elemento .logo-text não encontrado.');
        return;
    }

    // Funções para mostrar frames da animação
    function resetFrames() {
        frames.forEach(frame => frame.classList.remove('active-frame'));
        frames[0].classList.add('active-frame');
    }

    function showFrame(index) {
        frames.forEach(frame => frame.classList.remove('active-frame'));
        frames[index].classList.add('active-frame');
    }

    let animationTimeout;

    function animateOnce(index = 0) {
        if (index >= frames.length) {
            return; // animação terminou
        }

        showFrame(index);
        animationTimeout = setTimeout(() => animateOnce(index + 1), 25);
    }

    // Eventos para ativar/desativar animação ao passar o mouse na palavra
    container.addEventListener('mouseenter', () => {
        clearTimeout(animationTimeout);
        animateOnce();
    });

    container.addEventListener('mouseleave', () => {
        clearTimeout(animationTimeout);
        resetFrames();
    });

    // Inicializa com o primeiro frame visível
    resetFrames();
});
