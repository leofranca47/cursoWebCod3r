const [a] = [10];
console.log(a);

let b = [10, 7, 9, 8];

const [n1, , n3, , n5, n6 = 0] = b;
console.log(n1, n3, n5, n6);

const [,[,nota]] = [[,8,8], [9,6,8]];
console.log(nota);