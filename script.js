const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

// Função para gerenciar o clique nos botões
const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id](); // Executa a função de acordo com o ID do botão
}

// Função para definir o próximo índice (verde -> amarelo -> vermelho -> verde)
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

// Função que muda a cor do semáforo automaticamente
const changeColor = () => {
    const colors = ['green', 'yellow', 'red']; // Ordem corrigida: verde -> amarelo -> vermelho
    const color = colors[colorIndex];
    turnOn[color](); // Liga a cor atual
    nextIndex(); // Atualiza o índice para a próxima cor
}

// Função para parar o modo automático
const stopAutomatic = () => {
    clearInterval(intervalId);
}

// Funções para ligar as cores ou iniciar/parar o modo automático
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => {
        intervalId = setInterval(changeColor, 1000); // Inicia o ciclo automático a cada 1 segundo
        buttons.children.automatic.id = 'stop'; // Altera o botão para "Parar"
    },
    'stop': () => {
        stopAutomatic(); // Para o ciclo automático
        buttons.children.stop.id = 'automatic'; // Altera o botão de volta para "Automático"
    }
}

// Adiciona evento de clique nos botões
buttons.addEventListener('click', trafficLight);







