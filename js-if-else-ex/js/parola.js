console.log('ciao mondo')

/* chiediamo una parola all'utente, controlliamo se la parola è più lunga di 5 stapiamo 'la parola è più lunga di 5', altrimenti stampiamo 'la parola nmon è più lunga di 5'
 */

// dichiare una variabile e assegnarli il valore scrito dall'utente in un prompt
let parola1 = prompt('Inserisci una parola') // string | null
console.log(parola1)

// dichiare una variabile e assegnarli il valore scrito dall'utente in un prompt
let parola2 = prompt("Inserisci un'altra parola") // string | null
console.log(parola2)

// let lunghezzaParola = parola.length // number
// console.log(lunghezzaParola)

// // SE lunghezza della parola > 5
// if (parola.length > 5) {
// 	// -- stampiamo 'la parola è più lunga di 5'
// 	console.log('la parola è più lunga di 5 caratteri')
// } else {
// 	// ALTRIMENTI
// 	// -- stampiamo 'la parola nmon è più lunga di 5'
// 	console.log('la parola nmon è più lunga di 5')
// }

// stampare la parola più corta

// SE parola1 è piu corta di parola2
if (parola1.length < parola2.length) {
	// -- stampiamo la parola1
	console.log(parola1)
} else if (parola2.length < parola1.length) {
	// ALTRIMENTI SE parola2 è più corta di parola1
	// -- stampiamo la parola2
	console.log(parola2)
} else {
	// ELSE
	// -- stampiamo le parole sono lunghe uguali
	console.log('Le parole sono lunghe uguali: ' + parola1 + ', ' + parola2 + '.')
}

// Altro modo per scrivere la stessa logica
let message = 'Le parole sono lunghe uguali: ' + parola1 + ', ' + parola2 + '.'

// controllo
if (parola1.length < parola2.length) {
	message = parola1
} else if (parola2.length < parola1.length) {
	message = parola2
}
//  else {
// 	message = 'Le parole sono lunghe uguali: ' + parola1 + ', ' + parola2 + '.'
// }

// stampiamo message
console.log(message)
