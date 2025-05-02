const nomeDog = "Cristine"
const porteDog = "P"
const idadeMinima = 2
const idadeDog = 1
let podeAdotar

//testes:
//idade = 1 + porte M = nao
//idade = 2 + porte M = sim
//idade = 2 + porte P = sim
//idade = 1 + porte P = sim

podeAdotar = idadeDog >= idadeMinima || porteDog === 'P' ? 'Apto para adoção' : 'Não apto para adoção'

console.log ("Nome do Dog:", nomeDog)
console.log ("Idade do Dog:", idadeDog)
console.log ("Porte do Dog:", porteDog)
console.log(podeAdotar)