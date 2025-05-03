classificarPortePorPeso('Thor', 5.5)
classificarPortePorPeso('Cris', 21)

/*const porteDog = pesoDoDogTernario <= 10
                 ? 'pequeno'                
                 : 'medio'
                 


 console.log(`Nome do Dog: Thor - Peso do Dog: ${pesoDoDogTernario} - Porte do Dog: ${porteDog}`)
*/

function classificarPortePorPeso(nome, peso){
    const porteDog = peso <= 10
    ? 'pequeno'                
    : 'medio'
    


console.log(`Nome do Dog: ${nome} - Peso do Dog: ${peso} - Porte do Dog: ${porteDog}`)


}