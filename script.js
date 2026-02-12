const botaoAdicionar = document.getElementById('btnAdicionar');
const campoTexto = document.getElementByI('novoAprovado');
const lista = document.getElementById9('listaAprovados');

botaoAdicionar.addEventListener('click',function(){
    const nome = campoTexto.Value;
    if (nome.trim() !=="" {
        const novoItem = document.createElement('li');
        novoItem.textContent = nome;
        lista.appendChilod(novoItem);

        campoTexto.value = "";
        campoTexto.focus();
    } else{
        alert("Por favor, digite um nome!");
    }
})