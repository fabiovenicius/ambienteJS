/**
 * Promessa
 * Pode ser atendida ou rejeitada
 * Processos assincronos
**/
function falaDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase)
        },segundos * 1000)
    })
}

