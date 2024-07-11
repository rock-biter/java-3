console.log('snack 06')
/**
 * Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso.
 */

const numPC = Math.floor(Math.random() * 11) // 0 - 10
console.log(numPC)

const numUtente = parseInt(
	prompt('Indovina il numero che sto pensando da 0 a 10')
)

console.log(numUtente)

if (numPC === numUtente) {
	console.log('Complimenti! Hai vinto!')
} else {
	console.log('Complimenti! Hai perso!')
}
