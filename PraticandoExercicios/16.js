/* Utilizando a estrutura do Switch faça um programa 
que simule uma calculadora básica. O programa recebe como 
parâmetros dois valores numéricos e uma string referente à 
operação e a realize com os valores numéricos na ordem que 
foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função 
efetuará a soma de 2 e 3. Dica: Os sinais das operações são: 
‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(a,operacao,b){
    switch (operacao){
       
        case '+':
            console.log(` Soma = ${a + b}`)
        break   
        case '-':
            console.log(` Subtração = ${a - b}`)
        break    
        case '*':
            console.log(` Multiplicação = ${a * b}`)
        break
        case '/':
            console.log(` Divisão = ${a / b}`)
        break    
        default:
             console.log(" Operação inválida.")
             break
    }
}

calculadora(2, '+' ,4)
calculadora(2, '-' ,4)
calculadora(2, '*' ,4)
calculadora(2, '/' ,4)
calculadora(2, '**' ,4)
calculadora(2, 'y' ,4)
