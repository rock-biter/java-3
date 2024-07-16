console.log('snack 03')
/**
 * Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
 */

const animals = [
	{
		nome: 'leone',
		famiglia: 'felidi',
		classe: 'mammiferi',
	},
	{ nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
	{ nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
	{ nome: 'fagiano', famiglia: 'fasianidi', classe: 'uccelli' },
]

console.log(animals)

const mammals = []

// VERSIONE CICLO FOR
// PER OGNI animale
for (let i = 0; i < animals.length; i++) {
	const currentAnimal = animals[i]
	console.log(currentAnimal)
	// - SE la classe dell'animale === 'mammiferi'
	if (currentAnimal.classe === 'mammiferi') {
		// -- pushamo l'animale nell árray mammals
		mammals.push(currentAnimal)
	}
}

// VERSIONE FOREACH
// animals.forEach(function (currentAnimal) {
// 	console.log(currentAnimal)

// 	if (currentAnimal.classe === 'mammiferi') {
// 		mammals.push(currentAnimal)
// 	}
// })

// VERSIONE FILTER
// const mammiferi = animals.filter(function (currentAnimal) {
// 	if (currentAnimal.classe === 'mammiferi') {
// 		return true
// 	} else {
// 		return false
// 	}
// })
// const mammiferi = animals.filter((el) => el.classe === 'mammiferi')
// console.log(mammiferi)

console.log(mammals)
