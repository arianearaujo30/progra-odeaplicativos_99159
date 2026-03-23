const form = document.getElementById('formAposentadoria');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Entradas
    const matricula = document.getElementById('matricula').value;
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const tempoTrabalho = parseInt(document.getElementById('tempoTrabalho').value);
    
    // Ano atual definido conforme o contexto (2026)
    const anoAtual = 2026;
    const idade = anoAtual - anoNascimento;

    // ALGORITMO DE QUALIFICAÇÃO (Lógica OU)
    // Requisito 1: Idade >= 65 OU Requisito 2: Tempo Trabalho >= 30
    const podeAposentar = (idade >= 65) || (tempoTrabalho >= 30);

    let mensagem = podeAposentar ? "Requer aposentadoria" : "Não requerer aposentadoria";
    let classeStatus = podeAposentar ? "requer" : "nao-requer";

    // Exibição dos dados
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <div class="info-item"><strong>Matrícula:</strong> ${matricula}</div>
        <div class="info-item"><strong>Idade:</strong> ${idade} anos</div>
        <div class="info-item"><strong>Tempo de Trabalho:</strong> ${tempoTrabalho} anos</div>
        <span class="status-msg ${classeStatus}">${mensagem}</span>
    `;
});