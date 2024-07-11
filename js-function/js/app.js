console.log('Funzioni')

// DICHIARAZIONE DI UNA FUNZIONE
function saluta(nome) {
	// codice
	console.log('Ciao ' + nome)
}

// INVOCAZIONE
saluta('Gianni')
saluta('Anna')
saluta('Mirko')

// FUNZIONE CON VALORE DI RITORNO
function somma(numA, numB) {
	const sum = numA + numB
	// console.log(sum)
	if (sum > 0) {
		return sum
		console.log('questo non verrà mai eseguito')
	}

	//verrà eseguito solo se la somma non è maggiore di zero
	console.log('dopo il return', sum)
}

let risultato = somma(10, 13) // number
// console.log(risultato) // 23

risultato = somma(-36, -23) // undefined
// console.log(risultato) // undefined

risultato = somma(0, 63) // number
// console.log(risultato) // 63

// let num = Math.random() * 10

const ePari = isEven(10) // boolean

function isEven(n) {
	// console.log(n)

	const resto = n % 2
	if (resto === 0) {
		// n è pari
		return true
	} else {
		// n è dispari
		return false
	}
}

// const numero = parseInt(prompt('inserisci un numero'))
// if (isNaN(numero)) {
// 	console.log('Il numero non è valido')
// } else if (isEven(numero)) {
// 	console.log('il numero inserito è pari')
// } else {
// 	console.log('il numero inserito è dispari')
// }

const numeri = 50

function stampaCubiFinoA(n) {
	for (let i = 0; i < n; i++) {
		const cubo = (i + 1) ** 3 // Math.pow(i + 1, 3)
		// console.log(i + 1, cubo)
	}
}

stampaCubiFinoA(numeri)

// const numeroUtente = parseInt(prompt('Dimmi fino a dove stampare il cubo'))

// stampaCubiFinoA(numeroUtente)

// somma numeri
const numbers = [3, 6, 4, 9, 5]
// let sum = 0

// for (let i = 0; i < numbers.length; i++) {
// 	const n = numbers[i]

// 	sum += n
// }

const nuovaSomma = sommaNumeri(numbers)

console.log(nuovaSomma)

function sommaNumeri(numeri) {
	let sum = 0

	for (let i = 0; i < numeri.length; i++) {
		const n = numeri[i]

		sum += n
	}

	return sum
}

console.log(sommaNumeri([0, 2, 6, 10]))
console.log(sommaNumeri([-6, 6, -19, 75]))
console.log(sommaNumeri([]))
