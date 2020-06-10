//Filtrar elementos de um Array

const carrinho = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'iPad Pro', preco: 4199, fragil: true},
    {nome:'Copo de Plástico', preco: 9.9, fragil: false},
    {nome:'Copo de Vidro', preco: 4.99, fragil: true},
    {nome:'Resma de Papel', preco: 19.20, fragil: false}
]

// Filtros:

const fragil = produto => produto.fragil == true

const caro = prod => prod.preco >= 2000

const barato = prod => prod. preco <= 100


//Resultados:

console.log(carrinho.filter(fragil))

console.log(carrinho.filter(caro))

console.log(carrinho.filter(barato))
