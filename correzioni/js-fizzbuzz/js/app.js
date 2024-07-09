console.log('Fizz Buzz')

// stampare i numeri da 1 a 100
for (let i = 0; i < 100; i++) {
	// console.log(i)
	const numero = i + 1

	const resto3 = numero % 3
	const resto5 = numero % 5

	// console.log(numero, resto3, resto5)

	// SE numero è multiplo di 3 e anche multiplo di 5
	if (resto3 === 0 && resto5 === 0) {
		// - stampa 'fizzbuzz'
		console.log('fizzbuzz')
	} else if (resto3 === 0) {
		// ALTRIMENTI SE è multiplo di 3
		// - stampa 'fizz'
		console.log('fizz')
	} else if (resto5 === 0) {
		// ALTRIMENTI SE è multiplo di 5
		// - stampa 'buzz'
		console.log('buzz')
	} else {
		// ALTRIMENTI
		// - stampa il numero
		console.log(numero)
	}
}
