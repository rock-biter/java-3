console.log('DOM')

// EXAMPLE 1 increment

let counter = 0 // number
// console.log(counter)
// counter = counter + 1

const buttonElement = document.getElementById('increment') // Element | null
// console.log(buttonElement)
const counterElement = document.getElementById('counter') // Element | null
// console.log(counterElement)

// QUANDO l'utente clicca sul punlante
buttonElement.addEventListener('click', function () {
	// - incrementare di 1 il contatore
	counter = counter + 1 // number
	// console.log('click', counter)

	// - stampare il nuovo valore nel DOM
	counterElement.innerHTML = counter
})

// EXAMPLE 2 change color

// recuperiamo il quadrato rosso dal DOM
const squareElement = document.getElementById('square')
// console.log(squareElement)
// recuperiamo il pulsante change color dal DOM
const buttonChangeElement = document.getElementById('change-color')
// console.log(buttonChangeElement)

// QUANDO clicchiamo sul punlsante
buttonChangeElement.addEventListener('click', function () {
	console.log('click sul button')
	// - impostiamo il colore di bg a blue

	// CASE 1.1 (className)
	// aggiugiamo al sqaureElement la classe bg-blue
	// const currentClasses = squareElement.className
	// squareElement.className = currentClasses + ' bg-blue'
	// // squareElement.className += ' bg-blue'
	// console.dir(squareElement)

	// CASE 1.2 (classList)
	// squareElement.classList.add('bg-blue')
	// squareElement.classList.remove('pippo')
	// squareElement.classList.toggle('active')

	// CASO 2
	// aggiungiamo uno stile in linea: background-color: cornflowerblue; al squareElement
	console.dir(squareElement)
	squareElement.style.backgroundColor = 'cornflowerblue'
	squareElement.style.fontSize = '24px'
})

// EXAMPLE 3
// recupeare l'input html dal DOM
const inputNameElement = document.getElementById('name')
console.dir(inputNameElement)

const buttonCalcolaElement = document.getElementById('calcola')
console.log(buttonCalcolaElement)

// QUANDO clicco su calcola
buttonCalcolaElement.addEventListener('click', function () {
	// - leggiamo il value dell'input
	const name = inputNameElement.value
	// - stampiamo il valore inserito dall'utente
	console.log(name) // valore inserito dentro l'input dall

	// - svuotare l'input
	inputNameElement.value = ''
})
