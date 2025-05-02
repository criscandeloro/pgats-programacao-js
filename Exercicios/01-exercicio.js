
//Declaração de Variáveis
const nomeDog = "Puppy"
let idade = 1
let peso = 10
const raca = "pinsher"
let adotado = true


//Tag
console.log("[Tag]")

console.table([
    {
        nome: nomeDog.toUpperCase(),
        raca: raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase(),
        peso: peso
    }])




