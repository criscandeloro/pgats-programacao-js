const pesoDog = 10
const estoqueAtualRacaoGramas = 5000

let qtdDiariaRacao = pesoDog * 30
let durarEstoque = estoqueAtualRacaoGramas/qtdDiariaRacao

console.log("Nome do Dog:", "Thor")
console.log(`Peso do Dog: ${pesoDog}`)
console.log(`Quantidade de Razão recomendada por dia: ${qtdDiariaRacao}`)
console.log(`Quantidade de dias que o estoque vai durar: ${parseInt(durarEstoque)}`)