const nomeDog = 'Pantera'
const porte = 'Pequeno'
const tempoAtividade = 30
let atividade = ''
let atividadenova = ''

switch (porte){    
    case 'Pequeno':
        atividade = 'brincar dentro de casa'
        break
    case 'Médio':
        atividade = 'caminhada no quarteirão'
        break
    case 'Grande':
        atividade = 'correr no parque'
        break
    default:
        atividade = 'porte inválido'        

}

if(tempoAtividade < 15){
    atividadenova = ' atividade rápida' + " " + atividade
    } else if(tempoAtividade<=30){
        atividadenova = ' tempo ideal' + " " + atividade
    } else {
        atividadenova = ' hora da diversão' + " " + atividade
    }


console.log('-----------------------')
console.log (`Nome do Dog:`, nomeDog)
console.log (`Porte:`, porte)
console.log (`Atividade:`, atividadenova)
console.log('-----------------------')