// Função literal
function fun1(){

}

//função como variável
const fun2 = function(){}

//Armazenar com array
const array = [function (a,b){return a+b}, fun1, fun2]

//Aramzenar em um atributo de um objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar)

//Passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//Função retornando outra funcção
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(1,2)(10)

//Contendo uma função em uma variável

const cincoMais = soma(2,3)

cincoMais(6)

