const fabricantes = ["Mercedes","Audi","BMW"]

fabricantes.forEach((fabricante, indice) => console.log(`${indice + 1}. ${fabricante}`) )

//Asinatura do forEach (elemento, indice)

const notas = [7.7, 6.5, 5.7, 8.9, 3.6, 7.1, 9.0]

//Obter notas abaixo de 7 sem callback

let notasBaixas = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    } 
}

console.log(notasBaixas)

// Mesmo procedimento com callback

notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)







