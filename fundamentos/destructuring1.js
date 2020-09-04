// novo recurso do EC2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa.endereco.logradouro)

// o destructuring cria uma variavel com os campos do objeto
const { nome, idade } = pessoa;
console.log(nome, idade);

// podemos setar outro nome para as variaveis
const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { endereco:{ logradouro: l, numero: nu, cep = '35792-746'}} = pessoa;
console.log(nu, l, cep);