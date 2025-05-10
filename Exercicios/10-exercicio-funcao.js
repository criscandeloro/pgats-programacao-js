/**
 * Distribuidor de Petiscos
 * 
Você tem uma lista de cães: Pantera, Luna e Thor
Crie um script que "entregue" 1 petisco para cada cão da lista.
Exiba uma mensagem como: "Entregando petisco para Pantera"
Mantenha os dados e a função em arquivos separados; use modularização para organizar.
 * 
 */


import { DOGS} from './10-exercicio-dados.js'
import { CATS } from './10-exercicio-dados.js'

function entregandoPetiscos(listaDeDogs){

listaDeDogs.forEach(dog /*conteudo da posição na lista*/ => 
    {

        console.log(`Entregando petisco para ${dog}`)

    }
)
    console.log("Todos os petiscos foram entregues")
}

export {
    entregandoPetiscos
}


