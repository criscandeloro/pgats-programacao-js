
//funcao sem retorno, com parametro
//function saudacoes(nome){
//    return `Olá, ${nome}!`
//}

const saudacoes = (nome) => `Olá, ${nome}!`
console.log(saudacoes('Teste2'))

//função nomeada com parametro e com retorno
//function obterNomeDoDogFormatado(nome){
//    return nome.toUpperCase()
//}

const obterNomeDoDogFormatado = (nome) => nome.toUpperCase()
console.log(obterNomeDoDogFormatado('Pipoca'))

//funcao nomeada com parametro e com default
//function exibirPorteDoDog(porte = 'ND'){
//    console.log(porte)
//}

const exibirPorteDoDog = (porte = 'ND') => console.log(porte)
exibirPorteDoDog()

//function com retorno uma array
//function obterObjetoDog(){
//    return [{
//        nome: 'Cris',
//        peso: 12
//    }, {
//        nome: 'Lázaro',
//        peso: 15
//    }]
//}
const obterObjetoDog = () => 
    [{
        nome: 'Cris',
        peso: 12
    }, {
        nome: 'Lázaro',
        peso: 15
    }]


console.log(obterObjetoDog())

//fuction com retorno de uma matriz
/*function listarNomeDosDogs(){
    return [
        'Cris',
        'Marea',
        'Fiat Uno'
    ]
}*/

const listarNomeDosDogs = () => [
    'Cris',
    'Marea',
    'Fiat Uno'
]
console.log(listarNomeDosDogs())