
calcularConsumoDeRacao('Pantera',14.5,5000)

function calcularConsumoDeRacao(nome, peso,estoque){
    const qtdDiariaRacao = peso * 30
    const durarEstoque = estoque/qtdDiariaRacao

    console.log('======================================================')
    console.log(`Nome do Dog: ${nome} `)
    console.log(`Peso do Dog: ${peso}`)
    console.log(`Quantidade de Razão recomendada por dia: ${qtdDiariaRacao}`)
    console.log(`Quantidade de dias que o estoque vai durar: ${parseInt(durarEstoque)}`)
    console.log('======================================================')
}



