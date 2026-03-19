const formVotacao = document.getElementById('formVotacao');
const resultadoDiv = document.getElementById('resultado');

formVotacao.addEventListener('submit', function(e) {
    e.preventDefault();

    const idade = parseInt(document.getElementById('idade').value);
    let mensagem = "";
    let subMensagem = "";

    // Lógica baseada nas regras fornecidas
    if (idade < 16) {
        mensagem = "Não pode votar 🚫";
        subMensagem = "Você ainda não atingiu a idade mínima.";
    } 
    else if (idade >= 16 && idade <= 17) {
        mensagem = "Voto Opcional ⚖️";
        subMensagem = "Você já pode votar se quiser, mas não é obrigado.";
    } 
    else if (idade >= 18 && idade <= 65) {
        mensagem = "Voto Obrigatório 📢";
        subMensagem = "Cidadão, sua participação é necessária por lei.";
    } 
    else {
        // Maiores que 65
        mensagem = "Voto Opcional 🧓";
        subMensagem = "Acima de 65 anos, o voto não é mais obrigatório.";
    }

    // Exibição do resultado
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <span class="destaque">${mensagem}</span>
        <p style="margin: 0; color: #689f38;">${subMensagem}</p>
    `;
});