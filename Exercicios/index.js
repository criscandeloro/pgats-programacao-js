/**
 * Console API
 */
/*
console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    name: "Cristine",
    turma: "02",
    disciplina: "JS"
},
{
    name: "Lázaro",
    turma: "02",
    disciplina: "Love" 
}])

//const - informações que nunca mudam
//var ou let - informações que podem mudar

// informacoes de um dog que nao mudam
const nome = 'Loki'
const raca = 'SDR / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informacoes que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'

//hoisting -> içamento ou elevação0 
// No plano de execução do código quando é var ele coloca no inicio do código a variavel com o valor da 
// variavel como undefined, para o let e o const tem o Time dead zone, onde demora para fazer isso, 
// por isso dá erro.

const irmaos = [
    {
        nome: 'Thor',
        idade: '10'

    },
    {
        nome: 'Lera',
        idade:'20' 

    }
]

console.table(irmaos)

console.log("Aula incial")
const pet = ['Lure', '2anos']
console.table(pet)

/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes - leia e escreva)
 * 
  
  String - cadeia
  Number - inteiros/real
  Boolean - logico
  Array - vetor/matriz
  
  undefined
  null

  BigInt = Number para números extremamente grandes 
  Symbol = 'identificador único'



  let numero = "5"

  console.log(numero)
  */
  const turma = "02"
  const data = '01/01/2020'

  //Concatenação
  // console.log("Aula 03 da Turma " +turma+" no sábado a tarde do dia 05 de abril de 2025.")

  //Interpolação - precisa ser a crase e ${}
 // console.log(`Aula 03 da Turma ${turma} no sábado a tarde do dia 05 0de abril de 2025.`)
  const nomeDeAlunos = "Cristine Maria João"
  const nomeDeAlunosSplit = nomeDeAlunos.split(" ")
  //console.log(turma.length)

  //console.log(nomeDeAlunosSplit)

 // console.log(nomeDeAlunos.toLowerCase()) //tudo minúsculo
 // console.log(nomeDeAlunos.toUpperCase()) //tudo maiúsculo

 // console.log(nomeDeAlunos.includes("Cristine"))

//Chai - biblioteca de asserções (cypress)

//console.log(nomeDeAlunos.replace("a", "p"))
//console.log(nomeDeAlunos.replaceAll("i", "a"))

const nomeComEspacos = "         Cris  linda    " 
console.log(nomeComEspacos.trim())

const dataSlice = '05/04/2025'
console.log(dataSlice.slice(0,2))