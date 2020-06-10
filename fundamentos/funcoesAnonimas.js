const soma = (a,b)=>{return a + b}

const imprimeResultado = function(a,b,operacao = soma){
    console.log(operacao(a,b))
}

const multiplicacao = (a,b) => a * b

imprimeResultado(3,2)

imprimeResultado(4,6,(a,b)=>{return a-b})

imprimeResultado(5,5,multiplicacao)