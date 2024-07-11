console.log('snack 05')
/**
 * Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.
 */

const numeriDispari = [] // Array
const numeriPari = [] // Array

for (let i = 0; i < 6; i++) {
	const num = parseInt(prompt('Inserisci in numero qualsiasi'))

	if (num % 2 !== 0) {
		// il numero è dispari perchè il resto della divisione per 2 è diverso da zero
		numeriDispari.push(num)
	}

	console.log(num)
}

console.log(numeriDispari)
