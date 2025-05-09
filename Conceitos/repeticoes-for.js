/**
 * para faca
 * contador; condicao; manipulacao do contador (incremento/decremento)
quantidadeDePetiscos; quantidadesDePetiscos <=quantidadeCalculado; quantidadeDePetiscos++ 
*/

const quantidadeCalculado = 3
const gatos =['Lessie','Pony', 'Fumaca']

for(let quantidadeDePetiscos =0;quantidadeDePetiscos<=quantidadeCalculado;quantidadeDePetiscos++){
 //acoes de dar um petisco
 console.log(`Dando o petisco de n ${quantidadeDePetiscos}`)
 console.log(`Dando o petisco para o gato ${gatos[quantidadeDePetiscos]}`)
}

for(let indice=0;indice<gatos.length;indice++){
    console.log(`Outro jeito de dar o petisco para o gato ${gatos[indice]}`)
}