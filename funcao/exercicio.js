// function operacao(valor1, valor2){
//     return{
//         soma: valor1 + valor2,
//         subtracao: valor1 - valor2,
//         multiplicacao: valor1 * valor2,
//         divisao: valor1 / valor2
//     }
// }

// console.log(operacao(10, 2));

// function triangulo(lado1, lado2, lado3){
//     if(lado1 == lado2 && lado2 == lado3){
//         console.log('Equilátero');
//     } else if((lado1 == lado2 && lado2 != lado3) || (lado2 == lado3 && lado3 != lado1)){
//         console.log('isosceles');
//     } else{
//         console.log('escaleno')
//     }
// }

// triangulo(1,1,1);
// triangulo(1,1,2);
// triangulo(1,2,2);
// triangulo(1,2,3);

// function elevado(base, expoente){
//     let a = base;
//     for(let i = 1; i < expoente; i++){
//         base *= a;
//     }

//     return base;
// }

// console.log(elevado(2,3));
// console.log(elevado(10,5));

// function divisao(dividendo, divisor){
//     return{
//         resultado: dividendo / divisor,
//         resto: dividendo % divisor
//     }
// }

// console.log(divisao(10,2));
// console.log(divisao(10, 3));

// // continua exercicio 5
// const valor = 0.1 + 0.2;
// console.log("R$ " + valor.toFixed(2).replace(',','.').replace('.',','));

// 06
// function jurosSimples(capital, taxa, tempo){
//     const montante = capital * (1 + taxa * tempo);
//     return montante;
// }

// function jurosCompostos(capital, taxa, tempo){
//     const montante = (taxa * capital * tempo) + capital;
//     return montante; 
// }

// console.log(jurosSimples(1200, 0.02, 15));
// console.log(jurosSimples(400, 0.04, 5));
// console.log(jurosCompostos(500, 0.04, 3));

// 07
// function bhaskara(a, b, c){
//     const delta = (b * b) - (4 * a * c);
//     if(delta < 0){
//         return "Delta é negativo";
//     } else{
//         const resuPositivo = (-b + Math.sqrt(delta)) / (2 * a);
//         const resuNegativo = (-b - Math.sqrt(delta)) / (2 * a);
//         return {
//             resuPositivo,
//             resuNegativo
//         };
//     }
// }

// console.log(bhaskara(1, 8, -9));
// console.log(bhaskara(3, -5, 12));

// 08
// function pontos(lista){
//     let menor = lista[0];
//     let maior = lista[0];
//     let bateuRecorde = 0;
//     let posicaoPior;
//     for(let i = 1; i < lista.length; i++){
//         if(lista[i] > maior){
//             maior = lista[i];
//             bateuRecorde++;
//         } else if(lista[i] < menor){
//             menor = lista[i];
//             posicaoPior = i +1
//         }
//     }

//     return {
//         bateuRecorde,
//         posicaoPior
//     }
// }

// console.log(pontos([10, 20, 20, 8, 25, 3, 0, 30, 1]));

// 09
// const maior = 100;
// const menor = 0;

// function resultado(nota){
//     if(nota < 38){
//         return {
//             nota,
//             resu: 'Reprovado'
//         };
//     } else if( nota <= 40){
//         if(nota%5 == 0){
//             return {
//                 nota,
//                 resu: 'Aprovado'
//             };
//         } else if(nota%5 != 0){
//             if((nota + 1)%5 == 0){
//                 nota += 1;
//                 return {
//                     nota,
//                     resu: 'Aprovado'
//                 };
//             } else if((nota + 2)%5 == 0){
//                 nota +=2;
//                 return {
//                     nota,
//                     resu: 'Aprovado'
//                 };
//             }
//         }
//     } else if(nota > 40){
//         if(nota%5 == 0){
//             return {
//                 nota,
//                 resu: 'Aprovado'
//             };
//         } else if((nota + 1)%5 == 0){
//             nota += 1;
//             return {
//                 nota,
//                 resu: 'Aprovado'
//             };
//         } else if((nota + 2)%5 == 0){
//             nota +=2;
//             return {
//                 nota,
//                 resu: 'Aprovado'
//             };
//         }
//     }
// }

// console.log(resultado(38))

// 10
// function divisivelPorTres(numero){
//     if(numero%3 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(divisivelPorTres(7));

// 11
// function calcularAnoBissexto (ano) {
//     if (ano <= 0){
//         return false
//     } else if (ano % 400 == 0) {
//         return true
//     } else if (ano % 100 == 0) {
//         return false
//     } else if (ano % 4 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(calcularAnoBissexto(0))
// console.log(calcularAnoBissexto(4))
// console.log(calcularAnoBissexto(100))
// console.log(calcularAnoBissexto(400))
// console.log(calcularAnoBissexto(800))
// console.log(calcularAnoBissexto(2020))
// console.log(calcularAnoBissexto(2021))

// 12
// function fatorial(numero){
//     if(numero == 0){
//         return 1;
//     }else{
//         let cont = numero;
//         for(let i = numero; i > 1; i--){
//             if(i != numero){
//                 cont *= i; 
//             }
//         }
//         return cont;
//     }
// }
// console.log(fatorial(10));

// 13
// function diaUtil(dia){
//     switch(dia){
//         case 1:
//         case 7:
//             return "Fim de semana";
//         break;
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             return "Dia útil";
//         break;
//         default:
//             return "Dia Inválido";
//     }
// }

// console.log(diaUtil(1));
// console.log(diaUtil(2));
// console.log(diaUtil(3));
// console.log(diaUtil(4));
// console.log(diaUtil(5));
// console.log(diaUtil(6));
// console.log(diaUtil(7));
// console.log(diaUtil(8));

// 14
// function sacolao(fruta){
//     switch(fruta){
//         case 'maçã':
//             return "Não vendemos esta fruta aqui";
//             break;
//         case 'kiwi':
//             return "Estamos com escassez de kiwis";
//             break;
//         case 'melancia':
//             return "Aqui está, são 3 reais o quilo";
//             break;
//         default:
//             return "Solicite uma fruta valida para o nosso sacolão";
//     }
// }

// console.log(sacolao("maçã"));
// console.log(sacolao("kiwi"));
// console.log(sacolao("melancia"));
// console.log(sacolao("beterraba"));

// 15

// function comprarVeiculo(modelo){
//     switch(modelo){
//         case 'hatch':
//             return "Compra efetuada com sucesso";
//             break;
//         case 'sedan':
//         case 'motocicleta':
//         case 'caminhonete':
//             return "Tem certeza que não prefere esse modelo?";
//             break;
//         default:
//             return "Não trabalhamos com este tipo de automóvel aqui";
//     }
// }

// console.log(comprarVeiculo('hatch'));
// console.log(comprarVeiculo('motocicleta'));
// console.log(comprarVeiculo('jipe'));

// 16
// function calculadora(valor1, valor2, sinal){
//     switch(sinal){
//         case '+':
//             return valor1 + valor2;
//             break;
//         case '-':
//             return valor1 - valor2;
//             break;
//         case '*':
//             return valor1 * valor2;
//             break;
//         case '/':
//             return valor1 / valor2;
//             break;
//         default:
//             return "Entre com um sinal válido";
//     }
// }

// console.log(calculadora(20,2,'+'));
// console.log(calculadora(20,2,'-'));
// console.log(calculadora(20,2,'*'));
// console.log(calculadora(20,2,'/'));

// 17
// function aumento(plano, salario){
//     switch(plano){
//         case 'A':
//             return (salario * 10/100) + salario;
//             break
//         case 'B':
//             return (salario * 15/100) + salario;
//             break;
//         case 'C':
//             return (salario * 20/100) + salario;
//             break
//         default:
//             return "Plano invalido";
//     }
// }

// console.log(aumento('A', 1000));
// console.log(aumento('B', 1000));
// console.log(aumento('C', 1000));
// console.log(aumento('D', 1000));

// 18 function numero(num){
//     switch(num){
//         case 0:
//             return "Zero";
//             break;
//         case 1:
//             return "Um";
//             break;
//         case 2:
//             return "Dois";
//             break;
//         case 3:
//             return "Três";
//             break;
//         case 4:
//             return "Quatro";
//             break;
//         case 5:
//             return "Cinco";
//             break;
//         case 6:
//             return "Seis";
//             break;
//         case 7:
//             return "Sete";
//             break;
//         case 8:
//             return "Oito";
//             break;
//         case 9:
//             return "Nove";
//             break;
//         case 10:
//             return "Dez";
//             break;
//         default:
//             return "Numero fora da sequencia";
//     }
// }

// console.log(numero(7));
// console.log(numero(30));

// // 19
// function lanchonete(cod, qtd) {
//     switch (cod) {
//         case 100:
//             return {
//                 produto: "cachorro quente",
//                 qtd,
//                 valorUnitario: "R$ 3,00",
//                 valorTotal: "R$ " + (qtd * 3).toLocaleString('pt-BR')
//             };
//             break;
//         case 200:
//             return {
//                 produto: "Hambúrguer Simples",
//                 qtd,
//                 valorUnitario: "R$ 4,00",
//                 valorTotal: "R$ " + (qtd * 4).toLocaleString('pt-BR')
//             };
//             break;
//         case 300:
//             return {
//                 produto: "Cheeseburguer",
//                 qtd,
//                 valorUnitario: "R$ 5,50",
//                 valorTotal: "R$ " + (qtd * 5.5).toLocaleString('pt-BR')
//             };
//             break;
//         case 400:
//             return {
//                 produto: "Bauru",
//                 qtd,
//                 valorUnitario: "R$ 7,50",
//                 valorTotal: "R$ " + (qtd * 7.5).toLocaleString('pt-BR')
//             };
//             break;
//         case 500:
//             return {
//                 produto: "Refrigerante",
//                 qtd,
//                 valorUnitario: "R$ 3,50",
//                 valorTotal: "R$ " + (qtd * 3.5).toLocaleString('pt-BR')
//             };
//             break;
//         case 600:
//             return {
//                 produto: "Suco",
//                 qtd,
//                 valorUnitario: "R$ 2,80",
//                 valorTotal: "R$ " + (qtd * 2.8).toLocaleString('pt-BR')
//             };
//             break;
//         default:
//             return "Não temos esse produto";
//     }
// }
// console.log(lanchonete(100, 10));
// console.log(lanchonete(600, 5));

// 20