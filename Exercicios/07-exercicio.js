
let qtdvoltas = 1
const passeioubastante = 5

/*
 while(qtdvoltas<passeioubastante){
       qtdvoltas++
    console.log(`Nro da volta atual ${qtdvoltas}`)
 
     if(qtdvoltas==5){
        console.log("Já passeiou bastante")
    
    }
   
 }*/

    while (qtdvoltas <= passeioubastante) {
        console.log(`Nro da volta atual ${qtdvoltas}`)
        qtdvoltas++
    }
    console.log("Já passeiou bastante")

quantidadeVoltas(1, 5)

function quantidadeVoltas(qtdvoltas, passeioubastante) {

    while (qtdvoltas <= passeioubastante) {
        console.log(`Nro da volta atual usando função ${qtdvoltas}`)
        qtdvoltas++
    }
    console.log("Já passeiou bastante usando função")
}
   