//Implementação do MAP
Array.prototype.map2 = function(cb){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(cb(this[i]))
    }
    return novoArray
}

//Teste

nums = [1,2,3,4,5,6]

const dobro = nums.map2(valor=>valor * 2)

console.log(dobro)