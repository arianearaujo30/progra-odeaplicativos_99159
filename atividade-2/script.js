// Seleciona o formulário e a área de resultado
const form = document.getElementById('formNotas');
const resDiv = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
    // Evita que a página recarregue ao clicar no botão
    e.preventDefault();

    // Captura os valores das 3 notas e converte para números
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);

    // Calcula a média aritmética
    const media = (n1 + n2 + n3) / 3;
    
    // Variáveis para armazenar a mensagem e o estilo
    let msg, classe;

    // Lógica: Média maior ou igual a 7 é aprovado
    if (media >= 7) {
        msg = "Aprovado! Você é o rei da praia! 🏄‍♂️";
        classe = "aprovado";
    } else {
        msg = "Reprovado. Deu ruim no verão! ☔";
        classe = "reprovado";
    }

    // Aplica a classe CSS (aprovado ou reprovado) e mostra a div
    resDiv.className = classe;
    resDiv.style.display = 'block';

    // Insere o resultado final no HTML
    resDiv.innerHTML = `
        <span class="nota-final">Média: ${media.toFixed(1)}</span>
        <p>${msg}</p>
    `;

    // (Opcional) Mostra um log no console para conferência do desenvolvedor
    console.log(`Cálculo realizado: ${n1}, ${n2}, ${n3}. Média final: ${media.toFixed(1)}`);
});