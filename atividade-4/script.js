const formMacas = document.getElementById('formMacas');
const resultadoDiv = document.getElementById('resultado');

formMacas.addEventListener('submit', function(e) {
    e.preventDefault();

    const quantidade = parseInt(document.getElementById('quantidade').value);
    let precoUnitario;

    // Regra: < 12 custa 1.30 | >= 12 custa 1.00
    if (quantidade < 12) {
        precoUnitario = 1.30;
    } else {
        precoUnitario = 1.00;
    }

    const valorTotal = quantidade * precoUnitario;

    // Exibindo o resultado formatado em Moeda Real (BRL)
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <p style="margin: 0; color: #ef6c00;">Valor Total da Compra:</p>
        <span class="valor-total">R$ ${valorTotal.toFixed(2).replace('.', ',')}</span>
        <p style="font-size: 0.9rem; margin-top: 10px;">
            ${quantidade < 12 ? 'Preço unitário: R$ 1,30' : 'Preço promocional: R$ 1,00'}
        </p>
    `;
});