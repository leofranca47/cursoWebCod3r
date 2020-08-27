function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(2, 5, 6); //js ignora o terceiro argumento pois na função não pede 3 argumentos

function soma(a, b = 1){
    return a + b;
}

console.log(soma(5, 6));
console.log(soma(8));