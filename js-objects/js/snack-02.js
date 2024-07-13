console.log('snack 02')
/**
 * A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
 */

const nomi = ['pippo', 'PLUTO', 'Paperino', 'GIAnnI']
console.log(nomi)

nomi[100] = 'Giuseppina'

let nomiFormattati = []

// PER OGNI nome dell'array di nomi
for (let i = 0; i < nomi.length; i++) {
	// - formattare il nome
	// -- recuperare il nome corrente
	const nomeCorrente = nomi[i]
	console.log(nomeCorrente)

	// faiQuesto(nomeCorrente, i, nomi)
	// -- dichiariamo una variabile e gli assegnamo il valore che ci restituisce  la fuzione capitalize passandogli come parametro il nome da formattare
	if (nomeCorrente) {
		const nome = capitalize(nomeCorrente)
		// console.log(nome)

		// - pushano il nome formattato nell'array nomiformattati
		nomiFormattati.push(nome)
	}
}

function faiQuesto(el, i, array) {
	console.log(el, i, array)
}

console.log('__FOREACH__')
// CICLARE ARRAY CON METODO FOREACH
// nomi.forEach(function (element) {
// 	console.log(element)

// 	const nome = capitalize(element)
// 	nomiFormattati.push(nome)
// })

// VERSIONE MEGAPRO
// nomiFormattati = nomi.map((el) => capitalize(el))

console.log(nomiFormattati)

// definire una funzione che riceva in input una stringa e restituisce come uotpu la stessa stringa fomattata con la prima lettera maiuscola e le altre lettere minuscole
function capitalize(string) {
	// prendiamo la prima lettere della string
	// let primaLettera = string[0] //string
	const primaLettera = string.charAt(0) //string
	// console.log(primaLettera)
	// prendere il resto della string a partire dalla seconda lettera
	const restoParola = string.slice(1)
	// console.log(restoParola)
	// concatenare la prima lettare messa maiuscola + il rsto della string tutta minuscola
	const nomeFormattato = primaLettera.toUpperCase() + restoParola.toLowerCase()
	// console.log(nomeFormattato)
	// ritornare la stringa concatenata

	return nomeFormattato
}

// capitalize('PIPPO')
// capitalize('PluTO')
// capitalize('paperino')
