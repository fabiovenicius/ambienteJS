// estrutura de Acumulador e depois elemento corrente

//Modo simples
const notas = [5.7, 8.9, 3.6, 6.8]

console.log(notas.reduce((acum,soma = 0) => acum + soma))

//Mais elaborado - soma dos valores das notas abaixo
const alunos = [
    {nome: "Ana", nota: 5.6, bolsista: true},
    {nome: "Beth", nota: 6.4, bolsista: false},
    {nome: "Carl", nota: 7.3, bolsista: true},
    {nome: "Dido", nota: 8.2, bolsista: false},
]

const somenteNotas = nota => nota.nota

const resultado = (acum, soma) => acum + soma

const somenteBolsistas = bolsista => bolsista.bolsista

const isBolsista = bolsista => bolsista.bolsista == true

console.log(alunos.map(somenteNotas).reduce(resultado))

// Todos os alunos são Bolsistas?



// Algum aluno é bolsista?


