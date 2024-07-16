console.log('snack 04')
/**
 * Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
 */

const persone = [
	{
		nome: 'Mario',
		cognome: 'Rossi',
		eta: 35,
	},
	{
		nome: 'Sara',
		cognome: 'Verdi',
		eta: 17,
	},
	{
		nome: 'Giuseppe',
		cognome: 'Marroni',
		eta: 12,
	},
	{
		nome: 'Silvia',
		cognome: 'Bianchi',
		eta: 45,
	},
	{
		nome: 'Gianni',
		cognome: 'Gialli',
		eta: 95,
	},
]

// VERSIONE CON FOR
let messages = []

for (let i = 0; i < persone.length; i++) {
	const currentPerson = persone[i]

	console.log(currentPerson)
	// nome + cognome + ? + puo guidare
	// let message = currentPerson.nome + ' ' + currentPerson.cognome

	// if (!canDrive(currentPerson)) {
	// 	message += ' non'
	// }

	// message += ' può guidare.'

	let message = currentPerson.nome + ' ' + currentPerson.cognome

	if (canDrive(currentPerson)) {
		message += ' può guidare'
	} else {
		message += ' non può guidare'
	}

	// pushare la stringa nell'array messages
	messages.push(message)
}

// VERSIONE CON MAP

messages = persone.map(function (currentPerson) {
	let message = currentPerson.nome + ' ' + currentPerson.cognome

	if (canDrive(currentPerson)) {
		message += ' può guidare'
	} else {
		message += ' non può guidare'
	}

	return message
})

console.log(messages)

// 'Silvia Bianchi può guidare'
// 'Giuseppe Marroni non può guidare.'
// nome + cognome + ? + puo guidare

function canDrive(person) {
	// const age = person.eta
	// console.log(age >= 18) // boolean

	return person.eta >= 18 && person.eta < 80

	// if (person.age >= 18) {
	// 	// return true se la persona pùo guidare
	// 	return true
	// } else {
	// 	// return false se la parsona non può guidare
	// 	return false
	// }
}

const res = canDrive({
	nome: 'Sara',
	cognome: 'Verdi',
	eta: 17,
})

console.log(res)
