/*
>  - maior que
>= - maior igual que
<  - menor que
<= - menor igual que
== - igualdade somente de valores
!= - diferença somente de valores
=== - igualdade de valores e tipo de dado
*/


console.log("maior que")
console.log(10>5) // true
console.log(`10 > 5 - ${10 > 5}`) // true
console.log(`10 > 20 - ${10 > 20}`) // false

console.log("menor que")
console.log(`10 < 5  - ${10 < 5}`) //false
console.log(`10 < 20 - ${10 < 20}`) //true

console.log("maior ou igual que")
console.log(10>=10) //verdadeiro = true
console.log(`10 >= 10 - ${10 >= 10}`) // true
console.log(`10 >= 9 - ${10 >= 9}`) // verdadeiro

console.log("menor ou igual que")
console.log(10<=10) //verdadeiro = true
console.log(`10 <= 10 - ${10 <= 10}`) //true
console.log(`10 <= 9 - ${10 <= 9}`) // false

console.log("igualdade somente valores")
console.log(`1 == '1' - ${1 == '1'}`)
console.log(`true == 1 - ${true == 1}`)
console.log(`false == 1 - ${false == 1}`)
console.log(`0 == false - ${0 == false}`)

console.log("igualdade de valores e tipo de dado")
console.log (`1 === '1' - ${1 === '1'}`)
console.log(`true === 1 - ${true === 1}`)
console.log(`false === 1 - ${false === 1}`)


console.log("diferença de valores")
console.log (`1 != 2 - ${1 != 2}`)
console.log(`1 !== '2' - ${1 !== 2}`)
