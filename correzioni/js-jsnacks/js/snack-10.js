console.log('snack 10')
/**
 * Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.
 */

// VERSIONE CON DUE NUMERI
let numeroPrecedente // undefined
let numeroCorrente = parseInt(prompt('Inserisci un numero')) // number
console.log(numeroPrecedente, numeroCorrente)

while (numeroCorrente !== numeroPrecedente) {
	numeroPrecedente = numeroCorrente //
	numeroCorrente = parseInt(prompt('Inserisci un numero')) // number
	console.log(numeroPrecedente, numeroCorrente)
}

// VERSIONE CON ARRAY
// const numeri = []
// let numeroCorrente = parseInt(prompt('Inserisci un numero')) // number

// while (numeroCorrente !== numeri[numeri.length - 1]) {
// 	numeri.push(numeroCorrente)
// 	numeroCorrente = parseInt(prompt('Inserisci un numero')) // number
// }
