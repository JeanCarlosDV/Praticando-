/* As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e 
calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando true ou false.*/

/* Para ser bissexto, o ano deve ser:

Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;

Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, 
deixa resto diferente de zero;

Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão 
deve ser exata, deixando o resto igual a zero. */


function verificar(ano){
    if(ano <= 0){
        return false
    } else if (ano %400 == 0){
        return true
    }
    else if(ano %100 == 0){
        return false
    } else(ano %4 == 0)
        return true 
}

    console.log(verificar(100))
    console.log(verificar(400))
    console.log(verificar(600))
    console.log(verificar(800))
