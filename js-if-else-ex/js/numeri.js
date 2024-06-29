console.log('numeri pari e dispari')

// const numero = '5' * 10 // number (NaN)

// if (isNaN(numero)) {
// 	console.log('Numero non valido')
// } else {
// 	console.log(numero)
// }

// console.log('ciao' * 10) // NaN number
// console.log(typeof ('ciao' * 10)) // number

// chiediamo un numero all'utente e sommiamolo ad un numero random generato dal pc. Stampare in console se la somma è pari o se è dispari

// 1) dichiarare una variabile numeroUtente e assegnargli il prompt dell'utente
let numeroUtente = prompt('Inserisci un numero intero a piacere') // string | null
numeroUtente = parseInt(numeroUtente) // number
console.log(numeroUtente)
console.log(typeof numeroUtente) // string

// 2) dichiarare una variabile numeroPc e assegnargli un numero generato randomicamente
let numeroPC = Math.random() * 100 // number (decimale)
numeroPC = Math.floor(numeroPC) + 1 // number (intero)
console.log(numeroPC, typeof numeroPC) // 1 - 100

// 3) dichiriamo una variabile somma a gli assegnamo numeroUtente + numeroPC
const somma = numeroUtente + numeroPC // number
console.log(somma)

const resto = somma % 2 // number [0,1]
console.log('resto', resto)
// SE somma è pari (resto === 0)
if (resto === 0) {
	// -- stampiamo 'la somma è pari'
	console.log('la somma è pari')
} else {
	// ALTRIMENTI
	// -- stampiamo 'la somma è dispari'
	console.log('la somma è dispari')
}

// let num = 56

// // numero è multiplo di 28
// console.log(num % 28) // number [0,1,2,...,27]
