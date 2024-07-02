console.log('ciao')

// chiedere il numero di km
const km = parseFloat(prompt('Quanti km devi percorrere?')) // number
console.log(km)
// chiedere l'eta dell'utente
const age = parseInt(prompt('Quanti anni hai?')) // number
console.log(age)

// prezzoBase = km * 0.21
const prezzoBase = km * 0.21 // number
console.log(prezzoBase)

// calcoliamo sconto
let sconto = 0 // number

// - SE eta < 18
if (age < 18) {
	// - - sconto = prezzoBase * 0.2 (20 /100)
	sconto = prezzoBase * 0.2 // numer
} else if (age > 65) {
	// - ALTRIMENTI SE eta > 65
	// - - sconto = prezzoBase * 0.4
	sconto = prezzoBase * 0.4 // 0.4 (40 /100) number
}
// else {
// 	// - ALTRIMENTI
// 	// - - sconto = 0
// 	sconto = 0
// }

// console.log(sconto)

// calcoliamo il porezzo finale
const prezzoFinale = prezzoBase - sconto // number

// stampare il prezzoFinale
const prezzoArrotondato = prezzoFinale.toFixed(2) // string
// console.log(prezzoArrotondato + 10) // string
console.log(prezzoArrotondato)
