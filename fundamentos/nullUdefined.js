const a = {name: 'Teste'};
const b = a;
b.name = "opa";
console.log(a);

let c = 2;
let d = c;
d++;
console.log(c, d);

const teste = {};
//console.log(teste.preco.toString());
teste.preco = 3.50;
console.log(teste.preco);