//Implementação do Filter

Array.prototype.filter2 = function(cb){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

//Teste

nums = [1,2,3,4,5,6]

const maior3 = nums.filter2(maiorQue3=>maiorQue3 > 3)

console.log(maior3)
