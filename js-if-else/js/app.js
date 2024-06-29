console.log('hello world')

// abbiamo un numero (8)
let n = 8 // number
// SE il numero è maggiore 10
if (n > 10) {
	// -- allora stampiamo il testo 'il numero () è maggiore di 10'
	console.log('il numero è maggiore di 10')
} /*ALTRIMENTI */ else {
	// -- stampiamo il testo 'il numero non è maggiore di 10'
	console.log('il numero ' + n + ' non è maggiore di 10')
	// console.log(`il numero ${n} non è maggiore di 10`) // template literal
}

console.log('finito')

// abbiamo il numero 5
let a = 3
console.log('il numero a è uguale a ' + a)
// SE il numero è maggiore di 5
let condizione1 = a > 5 // boolean (false)
let condizione2 = a == 5 // boolean (false)
// console.log(a > 10)
console.log(condizione1)
console.log(condizione2)

if (condizione1) {
	// -- stampo il numero è maggiore di 5
	console.log('il numero ' + a + ' è maggiore di 5')
} else if (condizione2) {
	// ALTRIMENTI SE il numero è uguale 5
	// -- il numero è 5
	console.log('il numero ' + a + ' è uguale a 5')
} else {
	// ELSE
	// -- il numero è minore di 5
	console.log('il numero ' + a + ' è minore di 5')
}

console.log('finito')

let b = 3 // number

console.log(b == '3') // true
console.log(b == '5') // false
console.log(b != '3') // false
console.log(b != '5') // true

console.log(b === '3') // false
console.log(b !== '3') // true
console.log(b === 3) // true
console.log(b !== 3) // false

let m = 61

// SE il numero m è compreso tra 10 e 50 (m >= 10 e m <= 50)
if (m >= 10 && m <= 50) {
	// true AND false => false
	// -- allora stampa 'ciao'
	console.log('ciao')
} else {
	// ALTRIMENTI
	// -- stampiamo arrivederci
	console.log('arrivederci')
}

let p = 60

// SE il numero non è compreso tra 10 e 50 (p < 10 o p > 50)
if (p < 10 || p > 50) {
	// if (!(m >= 10 && m <= 50)) {
	// false OR true => false
	// -- stampa ciao mondo
	console.log('ciao mondo')
} else {
	// ALTRIMENTI
	// -- stampa viva la TRAP
	console.log('viva la TRAP')
}

// contiene lo stato dell'utente
// se è loggato la variabile è true
// se non è loggato la variabile è false
let isLogged = false // boolean
console.log(!isLogged) // true
let isNotLogged = !isLogged

// SE l'utente non è loggato
if (isLogged === false) {
	// false === false => true
	// -- allora stampa 'Tu non puoi passare'
	console.log('tu non puoi passareeeeee!')
}

if (!isLogged) {
	// !false => true
	// true === false => false
	// -- allora stampa 'Tu non puoi passare'
	console.log('tu non puoi passareeeeee!')
}

// SE la lista è lunga oppure ci cose pesanti (acqua)
// -- allora prendo il carrello

// entro nel supermercato

const nome = 'Gianni'

if (nome === 'Gianni') {
	console.log('Ciao amico mio!')
} else {
	console.log('Piacere di conoscerti')
}

let cognome = 'Gianni'

if (nome >= cognome) {
	console.log('Che nome buffo')
} else {
	console.log('Ti chiami: ' + nome + ' ' + cognome)
}
