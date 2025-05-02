/**
 -- decremento
 ++ incremento
 ? ternário
 */

 console.log("Incremento")

 let pesoDoDog = 10

 console.log(pesoDoDog)
 pesoDoDog++
 console.log(pesoDoDog)
 
 console.log("Decremento")

 let pesoDoTutor = 10
 
 console.log(pesoDoTutor)
 pesoDoTutor--
 console.log(pesoDoTutor)

 console.log("ternário")

 const porte = pesoDoDog <=10 ? 'pequeno' : 'médio'
// <condicao> ? <acao se verdade> : <acao se falsa>

console.log(porte)

const pesoDoDogTernario = 21
const porteDog = pesoDoDogTernario <= 10
                 ? 'pequeno'
                 : pesoDoDogTernario <=20
                 ? 'medio'
                 : 'grande'

 console.log("Porte do Dog:", porteDog)                