const nome = 'Pantera'
const porte = 'teste'
const tempo = 30

let atividade

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
        break       

}
 let mensagem

if(tempo < 15){
    mensagem = 'atividade rápida' 
    } else if(tempo<=30){
        mensagem = ' tempo ideal'
    } else if (tempo>30){
        mensagem = ' hora da diversão'
    }


console.log (`${mensagem}: [${atividade}] `)
