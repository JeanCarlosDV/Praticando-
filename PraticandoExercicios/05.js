function valorMoeda(valorDecimal){
    valorEmReal = `R$ ${valorDecimal.toFixed(2).replace("." , ",")}`
    console.log(valorEmReal)
}

valorMoeda(0.1 + 0.2)

