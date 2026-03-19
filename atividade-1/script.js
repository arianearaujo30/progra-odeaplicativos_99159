// Seleciona o formulário e a área onde os resultados aparecerão
const formulario = document.getElementById('formulario');
const divResultados = document.getElementById('resultados');

// Adiciona um "escutador" para o evento de envio (submit)
formulario.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao clicar no botão
    event.preventDefault();

    // Captura os valores dos inputs e converte para números decimais
    const n1 = parseFloat(document.getElementById('numero1').value);
    const n2 = parseFloat(document.getElementById('numero2').value);

    // Realiza os cálculos matemáticos
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    
    // Tratamento especial para divisão (não existe divisão por zero!)
    let divisao;
    if (n2 !== 0) {
        divisao = (n1 / n2).toFixed(2); // Limita a 2 casas decimais
    } else {
        divisao = "Inválida (divisão por 0)";
    }

    // Faz a div de resultados aparecer (estava escondida no CSS)
    divResultados.style.display = 'block';

    // Insere o conteúdo HTML com os resultados dentro da página
    divResultados.innerHTML = `
        <h3 style="color: #ff4d6d; margin-top: 0;">✨ Resultados Doces ✨</h3>
        <div class="resultado-item">🍓 <b>Soma:</b> ${soma}</div>
        <div class="resultado-item">🍰 <b>Subtração:</b> ${subtracao}</div>
        <div class="resultado-item">🍭 <b>Multiplicação:</b> ${multiplicacao}</div>
        <div class="resultado-item">🥤 <b>Divisão:</b> ${divisao}</div>
    `;

    // Efeito opcional: Limpar os campos após calcular (descomente se quiser)
    // formulario.reset();
});