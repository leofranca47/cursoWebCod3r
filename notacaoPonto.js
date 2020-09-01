console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola2';

console.log(obj1);

function obj(nome){
    this.nome = nome;
    this.exec = ()=> console.log('Exec.....');
}

const obj2 = new obj('Cadeira');
const obj3 = new obj('Mesa');

console.log(obj2);
console.log(obj3);
obj3.exec();