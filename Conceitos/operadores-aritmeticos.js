/*
+ adição
- subtração
* multiplicação
 / divisão
% resto
** exponencial
*/

console.log("adição")
console.log(`1 + 1 = ${1 + 1}`) // 2

console.log("subtração")
console.log(`10 - 7 = ${10 - 7}`) // 3

console.log("multiplicação")
console.log(`2 * 2 = ${2 * 2}`) // 4

console.log("divisão")
console.log(`11 / 2 = ${11 / 2}`) // 5.5

console.log("resto")
console.log(`11 % 2 = ${11 % 2}`) // 1

console.log("exponencial")
console.log(`4 ** 4 = ${4 ** 4}`) //256

console.log(`2 + 3 * 4 = ${2+3*4}`) // precedencia - ordem de execucao - primeiro mult. depois soma
console.log(`(2 + 3) * 4 = ${(2+3)*4}`) // primeiro a soma pq está dentro do parenteses depois a mult.

//3*4 == 12
//12+2 == 14

console.log(10+5)
console.log(7%2)
console.log(4*2+3)
console.log(+"5"*2)

console.log("imprimir o inteiro")
console.log(parseInt(11/2))

console.log("Arrendondamento")

//Math.floor (arredondamento para baixo)
//Math.round (arrendonamento para cima - para o mais próximo)

console.log(Math.round(5.8))
console.log(Math.floor(5.8))
console.log(Math.round(5.4))
console.log(Math.floor(5.4))

console.log("Qtd de casas decimais depois da vírgula")

const valorDecimal = 2.2348966520

console.log(valorDecimal.toFixed(3)) 

console.log ("Arredonda para cima")
console.log(Math.ceil(valorDecimal))
