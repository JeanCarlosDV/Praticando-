/* O cardápio de uma lanchonete é o seguinte:
Código  Descrição do Produto       Preço
100      Cachorro Quente          R$ 3,00
200      Hambúrguer Simples       R$ 4,00
300      Cheeseburguer            R$ 5,50
400      Bauru                    R$ 7,50
500      Refrigerante             R$ 3,50
600      Suco                     R$ 2,80
      
Implemente uma função que receba como parâmetros o código do item pedido, 
a quantidade e calcule o valor a ser pago por aquele lanche. Considere que 
a cada execução somente será calculado um item. Use o comando switch. Crie um 
caso default para produto não existente. */


 //Código  Descrição do Produto Preço '100', '200', '300', '400', '500',  '600'

 
     function restaurante(quantidade){
      CachorroQuente      = 3.00
      HambúrguerSimples   = 4.00
      CheeseBurguer       = 5.50
      Bauru               = 7.50
      Refrigerante        = 3.50
      Suco                = 2.80
        switch (quantidade){
        case '100':
            console.log(` 1 Cachorro Quente = ${(1 * 3.00) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case '200':
            console.log(` 2 Hambúrgueres Simples = ${(2 * 4.00) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case '300':
            console.log(` 3 Cheese Burgueres = ${(3 * 5.50) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case '400':
            console.log(` 4 Baurus = ${(4 * 7.50) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case '500':
            console.log(` 5 Refrigerantes = ${(5 * 3.50) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case '600':
            console.log(` 6 Sucos = ${(6 * 2.80) .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        default:
            console.log(" Produto não existente.")
        }
}

restaurante('100')
restaurante('200')
restaurante('300')
restaurante('400')
restaurante('500')
restaurante('600')
restaurante('700')
restaurante('800')

