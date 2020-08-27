//Armazenando uma função em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);

//Armazenando uma arrow function
const soma = (a, b) =>{
    return a + b;
}

console.log(soma(2, 6));

//retorno implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(5, 4));

const imprimir2 = a => console.log(a);

imprimir2(8);