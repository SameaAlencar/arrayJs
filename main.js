'use strict'

const numeros = [20, 131, 70, 279, 320]

//Acrescentar 100 a cada elemento

//Solução Imperativa

// const limite = numeros.length -1
// let numeros100  = []


// for (let i=0; i <= limite; i++){
//      numeros100[i] = numeros[i] + 100
// }


//-----------Solução Declarativa-----------

//MAP - Percorre o array podendo modificar ou não e retornando um novo array do mesmo tamanho
//1º Elemento (VALOR)
//2º Índice (POSIÇÃO)
//3º Array (LISTA)

 const adicionar100 = (numero, index) => numero + 100 + index
 const numeros100 = numeros.map(adicionar100)


 console.log("numeros:", numeros)
 console.log("numeros maiores 100: ", numeros100)

 console.log(adicionar100(233))

//PROBLEMA - Criar um array com números menores que 100

// filter percorre todo o array filtrando dependendo de uma condição e retorna um array
// do mesmo tamanho ou ou menor.

const ehMenor100 = (numero) => numero <=100
const numerosMenores100 = numeros.filter(ehMenor100)

console.log("numeros menores que 100: ", numerosMenores100)

//PROBLEMA - Somar todos os valores (elemento)
//REDUCE - Percorre todo o array aplicando uma função(callbacj) e retornando um único valor
//1 acumulador
//2 elemento (valor)
//3 indice 
//4 array

const somar = (a, b) => a + b
const numerosSomados = numeros.reduce(somar, 0)

console.log("numeros somados", numerosSomados)

//Criar um novo array com os valores ao quadrado
const quadrado = (numero) => numero * numero
const numeroQuadrado = numeros.map(quadrado)

console.log("Ao quadrado" , numeroQuadrado)

//Criar um novo array com os valores pares
const pares = (numero) => numero %2 == 0  
const numeroPar = numeros.filter(pares)

console.log("numeros pares", numeroPar)

//Calcular a média dos valores
const media = (a, b) =>  a + b / 4
const numeroMedia = numeros.reduce(media, 0)

console.log("numero média ", numeroMedia)

//Calcular o valor total dos valores impares
const impares = (numero) => numero  %2 == 1
const numeroImpar = numeros.filter(impares)

const total = (a, b) => a + b
const numeroTotal = numeroImpar.reduce(total, 0)

console.log("numero total impar ", numeroTotal)



//Calcular o valor total, sabendo que cada valor teve 20% de desconto

const desconto = (numero) => numero * 0.8
const numeroDesconto = numeros.map(desconto)

const resultado = (a, b) => a + b  
const numeroResultado = numeroDesconto.reduce(resultado, 0)

console.log("numero desconto", numeroResultado)


