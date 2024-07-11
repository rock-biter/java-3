console.log('snack 04')
/**
 * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

const nomi = ['Anna', 'Chiara', 'Martino', 'Mario', 'Simonetta'] // Array

const nomeUtente = prompt('Inserisci il tuo nome') // string | null
console.log(nomi, nomeUtente)

const trovato = nomi.includes(nomeUtente) // boolean
// console.log(trovato)

if (trovato === true) {
	console.log('Sei tra gli invitati alla festa.')
} else {
	console.log('Mi dispiace non sei stato invitato')
}
