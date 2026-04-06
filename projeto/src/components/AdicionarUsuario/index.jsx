import '.style.css'
import { useState } from 'react'

export default function AdicionaUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    const handlerAdicionarUsuario = (event) => {
        // Evitando que página recarregue ao mudar algum elemento na página.
        event.preventDefault()

        // Verificando se os campos possuem algum contúdo.
        if (nome && email) {
            // Adicionando novo usuário.
            setListaDeUsuarios([...listaDeUsuarios, {nome, email}])
            // Definindo os campos como vazio.
            setNome('')
            setEmail('')
        }
    }
}

return {
    // Criando HTML da página.
   <div>className= 'formulario' 
}