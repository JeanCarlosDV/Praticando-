/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function diasDaSemana(dia){
    switch (dia){
        case 1:
            console.log(" Domingo é final de semana.")
            break; 
        case 2:
            console.log(" Segunda-feira é dia útil.")
            break;
        case 3:
            console.log(" Terça-feira é dia útil.")
            break;
        case 4:
            console.log(" Quarta-feira é dia útil.")
            break;
        case 5:
            console.log(" Quinta-feira é dia útil.")
            break;
        case 6:
            console.log(" Sexta-feira é dia útil.")
            break;
        case 7:
            console.log(" Sábado é final de semana.")
            break;
        default :
            console.log(" Dia inválido.")
        
    }
}

diasDaSemana(1)
diasDaSemana(2)
diasDaSemana(3)
diasDaSemana(4)
diasDaSemana(5)
diasDaSemana(6)
diasDaSemana(7)
diasDaSemana(8)
diasDaSemana(15)
diasDaSemana(20)