/** Resposta exec(subtrair, 4,2) */

function exec (operacao,a,b){
    return operacao(a,b) //Callback
}

const subtrair = (x,y) => console.log(x - y)

exec(subtrair,4,2)

/** Outras operações */

const somar = (a,b)=>console.log(a + b)

exec(somar,24,76)

setInterval(()=>console.log('Aprendi'),1000)









