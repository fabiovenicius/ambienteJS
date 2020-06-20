/**
 * Promessa
 * Pode ser atendida ou rejeitada
 * Processos assincronos
**/
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x:3,
        y:4
    }) // Somente um valor pode ser passado na função
})

p.then(function(valor){
    console.log(valor)
})

//Outra promise mais estruturada

new Promise(cumprirPromessa=>cumprirPromessa(['Ana','Bia','Claudia','Dani']))
    .then(primeiroElemento=>primeiroElemento[0])
    .then(primeiraLetra=>primeiraLetra[0])
    .then(letraMinuscula=>letraMinuscula.toLowerCase())
    .then(console.log)

//ou, para ter maior reuso
const primeiroElemento = arrayOuString=>arrayOuString[0] 
const letraMinuscula = letra => letra.toLowerCase()
new Promise(resolve=>resolve(['Ana','Bia','Claudia','Dani']))
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)