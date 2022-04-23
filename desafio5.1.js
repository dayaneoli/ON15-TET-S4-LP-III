//Refaça o exercício da semana passada trocando o método utilizado para um que utiliza pelo menos 3
// dos métodos aprendidos na aula de hoje! Nesta semana incluir a data e hora da compra faz parte 
// do retorno esperado para a entrega do exercício;
const clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}];

//reduce (soma da array para saber o valor total das compras da cliente)
const reduzirPara = clienteLilit.map(item => item.valor).reduce(
    (acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(`O valor total da compra da cliente Lilit é R$ ` + reduzirPara.toFixed(2).replace('.', ',')); 

//verificação de descontos (retorna array)
const filtrarPor = clienteLilit.filter((item) => item.valor >= 200.0).map(item => item.valor * 0.5)
// console.log(filtrarPor);

//soma dos elementos (da array que foi retornada no passo anterior) da verificação do desconto
var soma = 0
for (var i=0; i < filtrarPor.length; i++) {
        soma += filtrarPor[i];
}
// console.log(soma);

//verificação de descontos
const filtrarPor2 = clienteLilit.filter((item) => item.valor <= 199.9 && item.valor >= 100.0).map(item => item.valor * 0.8)
// console.log(filtrarPor2); 

//soma dos elementos da array da verificação do desconto (soma do resultado da array acima)
var soma2 = 0 //soma array
for (var i=0; i < filtrarPor2.length; i++) {
        soma2 += filtrarPor2[i];
}
// console.log(soma2);

//verificação de descontos
const filtrarPor3 = clienteLilit.filter((item) => item.valor <= 99.9 && item.valor >= 80.0).map(item => item.valor * 0.9)
// console.log(filtrarPor3); 

//soma dos elementos da array da verificação do desconto
var soma3 = 0
for (var i=0; i < filtrarPor3.length; i++) {
        soma3 += filtrarPor3[i];
}
// console.log(soma3);

//verificação de descontos
const filtrarPor4 = clienteLilit.filter((item) => item.valor <= 79.9 && item.valor >= 50.0).map(item => item.valor * 0.95)
// console.log(filtrarPor4); 

//soma dos elementos da array da verificação do desconto
var soma4 = 0
for (var i=0; i < filtrarPor4.length; i++) {
        soma4 += filtrarPor4[i];
}
// console.log(soma4);

//verificação de descontos
const filtrarPor5 = clienteLilit.filter((item) => item.valor <= 49.9).map(item => item.valor)
// console.log(filtrarPor5); 

//soma dos elementos da array da verificação do desconto
var soma5 = 0
for (var i=0; i < filtrarPor5.length; i++) {
        soma5 += filtrarPor5[i];
}
// console.log(soma5);

// Valor final VF (somar os 5 arrays dos descontos)
var somaTotal = soma + soma2 + soma3 + soma4 + soma5

// Valor do desconto
var descontoFinal = reduzirPara - somaTotal

console.log(`O valor do desconto aplicado na compra da ClienteLilit é R$ `+ descontoFinal.toFixed(2).replace('.', ',')); 
console.log(`O valor final da compra da ClienteLilit com desconto é R$ ` + somaTotal.toFixed(2).replace('.', ',')); 

//Bônus ou não

function realizarCompraLilit(valor) {
   
        let quantidadeDeProdutos = valor.length
        
        if(quantidadeDeProdutos > 10 || reduzirPara > 800.0) {
            console.log("Bônus: Você ganhou um cupom de R$50,00 para a sua prõxima compra")
                    } else {
                console.log("Não há bônus")
        }
    }
    
    realizarCompraLilit(clienteLilit)

//Refazendo data e hora
    const hoje = new Date();

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();
    
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      const dataLonga = hoje.toLocaleDateString("pt-BR", options)
      console.log(dataLonga.toUpperCase()); 

console.log('-------------------------------------------------------------------')

// SEGUNDA CLIENTE
let cliente2 = [
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}]

//reduce (soma da array para saber o valor total das compras da cliente)
const reduzirPara2 = cliente2.map(item => item.valor).reduce(
    (acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(`O valor total da compra da cliente 2 é R$ ` + reduzirPara2.toFixed(2).replace('.', ',')); 

//verificação de descontos
const filtrarPor6 = cliente2.filter((item) => item.valor >= 200.0).map(item => item.valor * 0.5)
// console.log(filtrarPor6); 

//soma dos elementos da array da verificação do desconto
var soma6 = 0
for (var i=0; i < filtrarPor6.length; i++) {
        soma6 += filtrarPor6[i];
}
// console.log(soma6);

//verificação de descontos
const filtrarPor7 = cliente2.filter((item) => item.valor <= 199.9 && item.valor >= 100.0).map(item => item.valor * 0.8)
// console.log(filtrarPor7); 

//soma dos elementos da array da verificação do desconto
var soma7 = 0
for (var i=0; i < filtrarPor7.length; i++) {
        soma7 += filtrarPor7[i];
}
// console.log(soma7);

//verificação de descontos
const filtrarPor8 = cliente2.filter((item) => item.valor <= 99.9 && item.valor >= 80.0).map(item => item.valor * 0.9)
// console.log(filtrarPor8); 

//soma dos elementos da array da verificação do desconto
var soma8 = 0
for (var i=0; i < filtrarPor8.length; i++) {
        soma8 += filtrarPor8[i];
}
// console.log(soma8);

//verificação de descontos
const filtrarPor9 = cliente2.filter((item) => item.valor <= 79.9 && item.valor >= 50.0).map(item => item.valor * 0.95)
// console.log(filtrarPor9); 

//soma dos elementos da array da verificação do desconto
var soma9 = 0
for (var i=0; i < filtrarPor9.length; i++) {
        soma9 += filtrarPor9[i];
}
// console.log(soma9);

//verificação de descontos
const filtrarPor10 = cliente2.filter((item) => item.valor <= 49.9).map(item => item.valor)
// console.log(filtrarPor10); 

//soma dos elementos da array da verificação do desconto
var soma10 = 0
for (var i=0; i < filtrarPor10.length; i++) {
        soma10 += filtrarPor10[i];
}
// console.log(soma10);

// Valor final VF (somar os 5 arrays dos descontos)
var somaTotal2 = soma6 + soma7 + soma8 + soma9 + soma10

// Valor do desconto
var descontoFinal2 = reduzirPara2 - somaTotal2

console.log(`O valor do desconto aplicado na compra da Cliente2 é R$ `+ descontoFinal2.toFixed(2).replace('.', ',')); 
console.log(`O valor final da compra da Cliente2 com desconto é R$ ` + somaTotal2.toFixed(2).replace('.', ',')); 

// Parte do bônus 
function realizarCompra2(valor) {
   
    let quantidadeDeProdutos = valor.length
    
    if(quantidadeDeProdutos > 10 || reduzirPara2 > 800.0) {
        console.log("Bônus: Você ganhou um cupom de R$50,00 para a sua prõxima compra")
                } else {
            console.log("Não há bônus")
    }
}

realizarCompra2(cliente2)

//Refazendo data e hora
    const hoje2 = new Date();

const dia2 = hoje.getDate();
const mes2 = hoje.getMonth();
const ano2 = hoje.getFullYear();
    
    const options2 = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      const dataLonga2 = hoje.toLocaleDateString("pt-BR", options2)
      console.log(dataLonga2.toUpperCase()); 

console.log('-------------------------------------------------------------------')
// // TERCEIRA CLIENTE
let cliente3 = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}]
    

//reduce (soma da array para saber o valor total das compras da cliente)
const reduzirPara3 = cliente3.map(item => item.valor).reduce(
    (acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(`O valor total da compra da cliente 3 é R$ ` + reduzirPara3.toFixed(2).replace('.', ',')); 

//verificação de descontos
const filtrarPor11 = cliente3.filter((item) => item.valor >= 200.0).map(item => item.valor * 0.5)
// console.log(filtrarPor11); 

//soma dos elementos da array da verificação do desconto
var soma11 = 0
for (var i=0; i < filtrarPor11.length; i++) {
        soma11 += filtrarPor11[i];
}
// console.log(soma11);

//verificação de descontos
const filtrarPor12 = cliente3.filter((item) => item.valor <= 199.9 && item.valor >= 100.0).map(item => item.valor * 0.8)
// console.log(filtrarPor12); 

//soma dos elementos da array da verificação do desconto
var soma12 = 0
for (var i=0; i < filtrarPor12.length; i++) {
        soma12 += filtrarPor12[i];
}
// console.log(soma12);

//verificação de descontos
const filtrarPor13 = cliente3.filter((item) => item.valor <= 99.9 && item.valor >= 80.0).map(item => item.valor * 0.9)
// console.log(filtrarPor13); 

//soma dos elementos da array da verificação do desconto
var soma13 = 0
for (var i=0; i < filtrarPor13.length; i++) {
        soma13 += filtrarPor13[i];
}
// console.log(soma13);

//verificação de descontos
const filtrarPor14 = cliente3.filter((item) => item.valor <= 79.9 && item.valor >= 50.0).map(item => item.valor * 0.95)
// console.log(filtrarPor14); 

//soma dos elementos da array da verificação do desconto
var soma14 = 0
for (var i=0; i < filtrarPor14.length; i++) {
        soma14 += filtrarPor14[i];
}
// console.log(soma14);

//verificação de descontos
const filtrarPor15 = cliente3.filter((item) => item.valor <= 49.9).map(item => item.valor)
// console.log(filtrarPor15); 

//soma dos elementos da array da verificação do desconto
var soma15 = 0
for (var i=0; i < filtrarPor15.length; i++) {
        soma15 += filtrarPor15[i];
}
// console.log(soma15);

// Valor final VF (somar os 5 arrays dos descontos)
var somaTotal3 = soma11 + soma12 + soma13 + soma14 + soma15

// Valor do desconto
var descontoFinal3 = reduzirPara3 - somaTotal3

console.log(`O valor do desconto aplicado na compra da Cliente3 é R$ `+ descontoFinal3.toFixed(2).replace('.', ',')); 
console.log(`O valor final da compra da Cliente3 com desconto é R$ ` + somaTotal3.toFixed(2).replace('.', ',')); 

function realizarCompra3(valor) {
   
        let quantidadeDeProdutos = valor.length
        
        if(quantidadeDeProdutos > 10 || reduzirPara3 > 800.0) {
            console.log("Bônus: Você ganhou um cupom de R$50,00 para a sua prõxima compra")
                    } else {
                console.log("Não há bônus")
        }
    }
    
    realizarCompra3(cliente3)

//Refazendo data e hora
    const hoje3 = new Date();

const dia3 = hoje.getDate();
const mes3 = hoje.getMonth();
const ano3 = hoje.getFullYear();
    
    const options3 = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      const dataLonga3 = hoje.toLocaleDateString("pt-BR", options3)
      console.log(dataLonga3.toUpperCase()); 


