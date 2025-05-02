const idadeMinima = 2



//testes:
//idade = 1 + porte M = nao
//idade = 2 + porte M = sim
//idade = 2 + porte P = sim
//idade = 1 + porte P = sim



console.log ("Nome do Dog:", "Thor")
console.log(verificarSePodeSerAdotado(1,'M'))
console.log(verificarSePodeSerAdotado(2,'M'))
console.log(verificarSePodeSerAdotado(2,'P'))
console.log(verificarSePodeSerAdotado(1,'P'))



function verificarSePodeSerAdotado(idade,porte){
    const adocao = idade >= idadeMinima || porte === 'P' 
                       ? 'Apto para adoção' 
                       : 'Não apto para adoção'
    return adocao                   
  }