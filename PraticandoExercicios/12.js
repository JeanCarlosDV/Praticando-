/*Faça um algoritmo que calcule o fatorial de um número.*/


function fatorial(num){
    var resultado = num
    for(var i= 1; i < num; i ++ ){
        resultado = resultado * i
    } 
    return resultado
}

console.log(fatorial(5))