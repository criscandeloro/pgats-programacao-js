/**
 && - E / AND
 || - OU / OR
 ! NAO / NOT

 */

 console.log("&& - E / AND")
 const nomeDog = "Pipoca"
 const nomePossuiUmaPalavra = nomeDog.split(" ").length === 1
 const nomePossuiAteDezCaracteres = nomeDog.length <= 10

 console.log(nomePossuiUmaPalavra && nomePossuiAteDezCaracteres) //true

 console.log("|| - OU / OR")

 const dog = {
    adotado:false,
    peso:5.3
 }
 console.log(`Se dog não for adotado e peso menor que 10 - ${!dog.adotado || dog.peso < 10}`) //true 
 console.log(true || true)
 console.log(true || false)
 console.log(false || true)
 console.log(false || false)

 console.log("! NAO / NOT")

 console.log(`true - ${true}`) //true 
 console.log(`!true - ${!true}`) //false