console.log('snack 01')
/**
 * Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
 */

const cars = [
	{
		marca: 'Ford',
		modello: 'Focus',
		alimentazione: 'benzina',
	},
	{
		marca: 'Fiat',
		modello: 'Panda',
		alimentazione: 'diesel',
	},
	{
		marca: 'Fiat',
		modello: '500',
		alimentazione: 'benzina',
	},
	{
		marca: 'Toyota',
		modello: 'Auris',
		alimentazione: 'ibrida',
	},
	{
		marca: 'Ford',
		modello: 'Kuga',
		alimentazione: 'benzina',
	},
	{
		marca: 'Reault',
		modello: 'Clio',
		alimentazione: 'metano',
	},
	{
		marca: 'Testa',
		modello: 'Model 3',
		alimentazione: 'elettrica',
	},
	{
		marca: 'VolkSwagen',
		modello: 'T-Roc',
		alimentazione: 'glp',
	},
	{
		marca: 'VolkSwagen',
		modello: 'Tiguan',
		alimentazione: 'diesel',
	},
	{
		marca: 'Fiat',
		modello: 'Panda',
		alimentazione: 'metano',
	},
]

console.log(cars)

const autoBenzina = [] // array<Object>
const autoDiesel = [] // array<Object>
const altreAuto = [] // array<Object>

for (let i = 0; i < cars.length; i++) {
	const macchinaCorrente = cars[i] // Object

	const alimentazione = macchinaCorrente.alimentazione // string
	let arrayToPush = altreAuto
	// console.log(macchinaCorrente, alimentazione)
	// SE alimentazione è uguale a 'benzina'
	if (alimentazione === 'benzina') {
		// - pushare la macchina nell'array delle auto a benzina
		arrayToPush = autoBenzina
		// autoBenzina.push(macchinaCorrente)
	} else if (alimentazione === 'diesel') {
		// ALTRIMENTI SE alimentazione è uguale a diesel
		// - pushamo la macchina nell'array delle auto diesel
		arrayToPush = autoDiesel
		// autoDiesel.push(macchinaCorrente)
	}
	// else {
	// 	// ALTRIMENTI
	// 	// - pushamo la macchina nell'array altre auto
	// 	altreAuto.push(macchinaCorrente)
	// }

	arrayToPush.push(macchinaCorrente)
}

console.log(autoBenzina)
console.log(autoDiesel)
console.log(altreAuto)
