function PessoaC(nome){
    this.nome = nome;
    this.falar = function (){
        console.log(`Meu nome é ${nome}`);
    }
}

const p2 = new PessoaC('João');
p2.falar();