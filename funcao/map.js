//Serve para transformar um array em outro
const nums = [1,2,3,4,5,6]

//For com prpósito

let resultado = nums.map(dobro => dobro * 2).map(soma10 => soma10 + 10).map(formataReal => `R$ ${formataReal.toFixed(2).replace('.',',')}`)

console.log(resultado)

//Retorno de valores de objetos

// retornar array apenas com os preços

const carrinho = [
    '{"nome": "Borracha", "preco": 3.50}',
    '{"nome": "Caderno", "preco": 19.59}',
    '{"nome": "Lapis", "preco": 2.10}',
    '{"nome": "Caneta Especial", "preco": 54.90}'
]
 // Transforma o JSON em objeto
 
const paraObjeto = json => JSON.parse(json)

const somentePreco = precos => precos.preco


const resultadoFinal = carrinho.map(paraObjeto).map(somentePreco)

console.log(carrinho [0])

console.log(resultadoFinal)

