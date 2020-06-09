function Carro(velocidadeMaxima = 200, delta = 5){
    //dado privado
    let velocidadeAtual = 0

   this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro

uno.acelerar()


console.log(uno.getVelocidadeAtual())

console.log(typeof(Carro))

