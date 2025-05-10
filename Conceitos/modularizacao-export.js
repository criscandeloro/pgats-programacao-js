/**
 Sintaxe Commons.JS:
 module.exports = {}

 EMS - Ecmascript Standart Modules
 export {}cd / import 
 */


 function exibirNomePet(nomePet){
    console.log(`O nome do Pet ${nomePet}`)
 }

 //exibirNomePet('Pipoca')

 export {
    exibirNomePet
 }