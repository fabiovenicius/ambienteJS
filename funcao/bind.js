//serve para amarrar um objeto

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}


const pessoaFalando = pessoa.falar
pessoaFalando() // Conflito ente
