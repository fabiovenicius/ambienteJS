//Leitura de arquivo

const fs = require('fs')
const path = require('path')

//Verificar o diretório corrente
console.log(__dirname)

const caminho = path.join(__dirname,'arquivo.txt')

console.log('Início...')
fs.readFile(caminho,(err,data)=>console.log(data.toString()))
console.log('Fim...')

console.log('Início Sync...')
fs.readFileSync(caminho,(err,data)=>console.log(data.toString()))
console.log('Fim Sync...')






