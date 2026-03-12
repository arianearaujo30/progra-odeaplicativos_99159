// Exemplo com vetor de nomes
const ListaDeUsuario = ["Ana", "Maria", "Joana"]

// Exemplo com vetor de números 
const ListaDeNúmeros = [1,2,3,4,5]

// Vetor de objetos com dados de nome e idade
// Um objeto carrega dados como uma classe

const ListaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45}

]

// Percorrendo e exibindo os elementos do vetor
// ForEach é uma função com laço de repetição
console.log("Exibindo todos ops usuários do vetor.")
ListaDeUsuarios.forEach(usuario => {
    console.log('${usuario.nome} tem ${usuario.idade} anos.')
})

//Como os antigos.
console.log("\nExibindo todos os usuários do vetor.")
for (let i = 0; i < ListaDeNúmeros.length; i++) {
    console.log('${ListaDeUsuarios[i].nome} tem ${ListaDeUsuarios[i].idade} anos.')
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = ListaDeUsuario.filter(usuario => usuario.idade >= 18)
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisar, por isso não vamos usar.
maioridade.forEach( usuario =>
    console.log('${usuario.nome} tem ${usuario.idade} anos.')
)

console.log("\nFiltrando menores de 18 anos.")

console.log("\nNa lista de números, filtre e mostre apenas numeros pares.")

console.log("\nNa lista de nomes, mostre todos os nomes com forEach.")

console.log("\nNa lista de usuários, mostre apenas os nomes.")
const nomes = ListaDeUsuario.map(u => u.nome)
nomes.forEach(nome => console.log('Nome: ${nome}'))

console.log("\nNa lista de usuários, encontre um usuário.")
const usuarioEncontrado = ListaDeUsuario.find(u => u.nome === "Ana")
console.log(usuarioEncontrado)
console.log('Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncopntrado.idade')

console.log("\nNa lista de usuario, encontre um usuario com idade de 45 anos.")
console.log('Nome: ${usuarioEncontradoPorIdade.nome} \nIdade: ${usuarioEncopntradoPorIdade.idade')

console.log("\nNa lista de usuários, somando todas as idades: ")
const somaIdades = ListaDeUsuario.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaIdades)


