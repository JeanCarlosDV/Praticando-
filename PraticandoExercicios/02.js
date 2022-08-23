/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. 
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

let tipo1 = function(){
    if(a == b && c == a ) {
        return "Triângulo Equilatero"
    }
}
console.log(tipo1(a=2,b=2,c=2))


let tipo2 = function(){
    if(a == b && b != c) {
        return "Triângulo Isósceles"
    }
}
console.log(tipo2(a=2,b=2,c=8))


let tipo3 = function(){
    if(a != b && b != c) {
        return "Triângulo Escaleno"
    }
}
console.log(tipo3(a=2,b=4,c=8))
