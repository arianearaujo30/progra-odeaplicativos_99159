const form = document.getElementById('formNotas');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura as notas
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);

    // VALIDAÇÃO: Notas entre 0 e 10
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        alert("Nota inválida! Por favor, insira valores entre 0 e 10.");
        // O formulário não prossegue, simulando a "pergunta novamente"
        return;
    }

    // CÁLCULO DA MÉDIA
    const media = (n1 + n2 + n3) / 3;
    let mensagem = "";
    let classeStatus = "";

    // CRITÉRIOS
    if (media >= 7) {
        mensagem = "APROVADO 🥗";
        classeStatus = "aprovado";
    } 
    else if (media >= 5 && media < 7) {
        mensagem = "RECUPERAÇÃO ⚠️";
        classeStatus = "recuperacao";
    } 
    else {
        mensagem = "REPROVADO ❌";
        classeStatus = "reprovado";
    }

    // EXIBIÇÃO
    resultadoDiv.style.display = 'block';
    resultadoDiv.className = classeStatus;
    resultadoDiv.innerHTML = `
        <p style="margin:0;">Média Final</p>
        <span style="font-size: 2.5rem; display:block;">${media.toFixed(1)}</span>
        <span class="status">${mensagem}</span>
    `;
});