/* Um funcionário irá receber um aumento de acordo com o seu 
plano de trabalho, de acordo com a tabela abaixo:

Plano  Aumento
A        10%
B        15%
C        20%
Faça uma função que leia o plano de trabalho e o salário atual 
de um funcionário e calcula e imprime o seu novo salário. Use a 
estrutura switch e faça um caso default que indique que o plano é inválido. */

function planoDeTrabalho(planos){
    
    salarioAtual = 1800.00
    switch (planos){
        
        case 'Plano A':
            console.log(` Plano A: Seu novo salário é ${(salarioAtual * 0.10 + salarioAtual) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 'Plano B':
            console.log(` Plano B: Seu novo salário é ${(salarioAtual * 0.15 + salarioAtual) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 'Plano C':
            console.log(` Plano C: Seu novo salário é ${(salarioAtual * 0.20 + salarioAtual) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        default:
            console.log(" Plano inválido.")
}
}

planoDeTrabalho('Plano A')
planoDeTrabalho('Plano B')
planoDeTrabalho('Plano C')
planoDeTrabalho('Plano D')
planoDeTrabalho('Plano Z')