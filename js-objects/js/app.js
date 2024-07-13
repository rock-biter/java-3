console.log('Object')

// DUCHIARIAMO UNA VARIABILE DI TIPO OBJECT
const user = {
	userName: 'rockbiter',
	email: 'gianni@gmail.com',
	password: '****',
	active: true,
	creditCard: {
		number: '2356489563254785',
		owner: 'Mimmo Pasquale',
		expire: '05/28',
		cvv: 895,
	},
}

console.log(user)
console.log(user.creditCard.number)

const car = {
	marca: 'Ford',
	modello: 'Fiesta',
	annoImmatricolazione: 2020,
	targa: 'P1PP0',
	colori: ['rossa'],
	alimentazione: 'diesel',
	cilindrata: 1200,
	potenza: 75,
	prezzo: 16000,
	accessori: [],
	// 0: 'Babbo',
	// 1: 'Mamma',
} // Object
console.log(car)

// DOT NOTATION
car.prezzo = 14000

const macchine = ['Ford Fiesta', 'Fiat Panda', 'Mini', 'T-Roc'] // Array
macchine.push('Ferrari')
console.log(macchine[0])

macchine[2] = 'Tiguan'
console.log(macchine)

console.log(car.potenza)
console.log(car.colori)
console.log(car.marca + ' ' + car.modello)
console.log(car.prezzo.toFixed(2))

const titleElement = document.getElementById('title') // Object | null
console.dir(titleElement.innerHTML)
titleElement.innerHTML = 'Benvenuto'

const testo = 'Ciao mamma' // string

console.log(testo.toLowerCase())
