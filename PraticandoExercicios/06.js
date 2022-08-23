/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos. */

/* A fórmula para calcular os juros simples é expressa por:

J = C . i . t

Onde,

J: juros
C: capital
i: taxa de juros. Para substituir na fórmula, a taxa deverá estar 
escrita na forma de número decimal. Para isso, basta dividir o 
valor dado por 100.
t: tempo. A taxa de juros e o tempo devem se referir à mesma 
unidade de tempo. */

function jurosSimples (c,i,t){
    
    console.log(" Juros Simples:\n")
    valorComJuros = ` Capital inicial: R$${c .toFixed(2).replace("." , ",")}\n Taxa de juros: ${i .toFixed(2).replace("." , ",")}%\n Tempo de aplicação: ${t} meses ` 
    console.log(valorComJuros)
    montante = (j = c * i * t)
    console.log(` Montante da aplicação: R$${j .toFixed(2).replace("." , ",")}\n\n`)
    }
    
    jurosSimples(1200, 0.02, 15)

  
/* Para calcular os juros compostos, utiliza-se a expressão:

M = C (1+i)t

Onde,

M: montante
C: capital
i: taxa fixa
t: período de tempo */

function jurosCompostos (C, I, T){
    console.log(" Juros Compostos:\n")
    valor2ComJuros = ` Capital inicial: R$${C .toFixed(2).replace("." , ",")}\n Taxa de juros: ${I .toFixed(2).replace("." , ",")}%\n Tempo de aplicação: ${T} meses `
    console.log(valor2ComJuros)
    montante = (Math.pow(M = C * (1 + I) ** T))
    console.log(` Montante da aplicação: R$${M .toFixed(2).replace("." , ",")}`)
}

jurosCompostos(5000, 0.01, 6)
