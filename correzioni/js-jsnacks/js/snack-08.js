console.log('snack 08')
/**
 * Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso. 
 

A questo punto fate giocare l'utente, fintanto che non vince la partita contro il PC :)
 */

const numPC = Math.floor(Math.random() * 11) // 0 - 10
console.log(numPC)

let numUtente = parseInt(
	prompt('Indovina il numero che sto pensando da 0 a 10')
)
// console.log(numUtente)

while (numPC !== numUtente) {
	console.log('Non hai indovinato. Ritenta!')
	numUtente = parseInt(prompt('Indovina il numero che sto pensando da 0 a 10'))
}

// for (null; numPC !== numUtente; null) {
// 	console.log('Non hai indovinato. Ritenta!')
// 	numUtente = parseInt(prompt('Indovina il numero che sto pensando da 0 a 10'))
// }

console.log('Complimenti! Hai vinto!')

// if (numPC === numUtente) {
// 	console.log('Complimenti! Hai vinto!')
// } else {
// 	console.log('Complimenti! Hai perso!')
// }
