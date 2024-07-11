console.log('snack 07')
/**
 * Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.

Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.
 */

// const numMax = 1000
const numMax = parseInt(
	prompt('Inserisci il numero massino da stampare della tabellina del 2')
)
const numIterazione = Math.floor(numMax / 2)
console.log(numIterazione)

for (let i = 0; i < numIterazione + 1; i++) {
	console.log('2 * ' + i + ' = ' + 2 * i)
}

// let num = 0
// let i = 0

// while (num < numMax) {
// 	num = i * 2
// 	console.log('2 * ' + i + ' = ' + 2 * i)
// 	i++
// }

// let num = 0

// for (let i = 0; num < numMax; i++) {
// 	num = i * 2
// 	console.log('2 * ' + i + ' = ' + 2 * i)
// }
