document.addEventListener('DOMContentLoaded', () => {
    const frames = [];
    // Pega todos os SVGs pelo ID
    for (let i = 1; i <= 16; i++) { // Certifique-se que o número de frames está correto
        const frame = document.getElementById(`frame${i}`);
        if (frame) {
            frames.push(frame);
        }
    }

    if (frames.length === 0) {
        console.warn('Nenhum frame SVG encontrado. Verifique os IDs.');
        return;
    }

    let currentFrameIndex = 0;
    const frameDuration = 80; // Duração de cada frame em milissegundos (ajuste para a velocidade desejada)

    // Sequência de abertura (seus frames na ordem original)
    // O frame 0 é o mais "aberto" (ou inicial), e o frame 15 (index 15, id="frame16") é o mais "fechado"
    const openingSequence = frames;

    // Sequência de fechamento (frames na ordem inversa da abertura, sem o primeiro e o último para evitar duplicação)
    // Começamos do penúltimo frame (index 14, id="frame15") e vamos até o segundo (index 1, id="frame2")
    const closingSequence = [...frames].reverse().slice(1, -1);

    // Combina as sequências para ter o ciclo completo (abrir e depois fechar)
    const animationSequence = [...openingSequence, ...closingSequence];

    function showFrame(index) {
        // Esconde todos os frames
        frames.forEach(frame => {
            frame.classList.remove('active-frame');
        });
        // Exibe o frame atual da sequência de animação
        animationSequence[index].classList.add('active-frame');
    }

    function animateFrames() {
        showFrame(currentFrameIndex);
        currentFrameIndex++;

        // Volta para o início da sequência de animação quando terminar
        if (currentFrameIndex >= animationSequence.length) {
            currentFrameIndex = 0;
        }
    }

    // Inicia a animação
    setInterval(animateFrames, frameDuration);

    // Exibe o primeiro frame assim que a página carrega
    showFrame(0);
});