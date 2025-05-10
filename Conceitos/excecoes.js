/**
 * tentar {
 * //conexao com o banco (exemplo)
 * } pegar (erro/excecao) {
 * guardar a exceção e exibir}
 * 
 * lancar um erro = throw
 */

try{
    console.log("Tentando alimentar o cachorro")
    throw new Error
} catch{
    console.log("Error")}
   finally{
    console.log('Sempre serei executado')
   } 

