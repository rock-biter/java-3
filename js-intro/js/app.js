// console.log stampa nella console del browser quello che inseriamo tra le parentesi tonde
console.log('ciao mondo')

// usaimo la variabile nome prima della dichisrazione
// console.log(nome) // ReferenceError
// console.log(age)

// dichiarato la variabile
let nome = 'Giangi 17' // string
// stampando in console il valore della variabile nome
console.log(nome)

let messaggioIniziale = 'Benvenuto sul nostro sito,'
// concatenazione tra stringhe
let messaggio = messaggioIniziale + ' ' + nome

console.log(messaggio)

// convenzione sul nome delle const
const API_KEY = 'kjhdoiandlasida.wdaidjda21w8awdawd!#4'

var age = 33 // number
console.log(age)
age = '34' // string
console.log(age)

// tipo booleano
age = true // boolean

// tipo undefined
let mamma = undefined // undefined
console.log(mamma)

// valore null
let nomePersona = null
console.log(nomePersona)

let numA = 10 // number
let numB = 5 // number
let numC = '20' // string
console.log(numA, numB)
console.log(numC)

// operatore somma +
let sum = numA + numB + 10
console.log(sum)

sum = numA + numB + numC // string ('1020')
console.log(sum) // concatena 10 e 20: 1020

let sub = numC - numB // number (15)
console.log(sub)
console.log(numA * numC) // number (200)
console.log(numC / numA) // number (2)

let pow2NumA = numA ** 2 // numA * numA
console.log(pow2NumA)

// modo per chiedere all'untente delle informazioni
let nomeUtente = prompt('Inserisci il tuo nome') // string | null
console.log(nomeUtente)

let etaUtente = prompt('Inserisci la tua età') // string | null
console.log(etaUtente)

// dichiariamo due variualibi di tipo number, calcoliamo la somma e stampiamola nella console

// dichiarare la variabile numA = 10
let a = 10
// dichiarare la variabile numB = 12
let b = 12
// calcolare la somma
//   dichiarare una variabile somma
let somma
//   assegnare alla variabile somma il risultato di numA + numB
somma = a + b
// stampare in console la somma
console.log(somma)
