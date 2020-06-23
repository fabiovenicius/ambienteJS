const carrinho = [
    {nome:'Notebook', qtde:10, preco: 2499, fragil: true},
    {nome:'iPad Pro', qtde:1, preco: 4199, fragil: true},
    {nome:'Copo de Plástico',qtde:2000, preco: 9.9, fragil: false},
    {nome:'Copo de Vidro', qtde:5000, preco: 4.99, fragil: true},
    {nome:'Resma de Papel', qtde:20, preco: 19.20, fragil: false}
]

//Impressora
const impr = (aserimpresso)=>{console.log(aserimpresso)}

//1. Fragil
const isfragil = fragil=>fragil.fragil == true
impr(carrinho.filter(isfragil))
//2. Valor total
const total = produto => produto.qtde * produto.preco
impr(carrinho.map(total))
//3. Média dos valores totais
impr(carrinho.map(total).reduce((a,b)=>a +b) / carrinho.length)