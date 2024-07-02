console.log('calcola calorie')

// const buttonElement = document.getElementById('calcola')
// // console.log(buttonElement)
// buttonElement.addEventListener('click', function () {
// 	console.log('calcola le calorie')
// })

// recuperiamo il form dal DOM
const formElement = document.getElementById('form-calorie')
console.log(formElement)

const inputKmElement = document.getElementById('km')
const inputWeightElement = document.getElementById('weight')
const selectAgeElement = document.getElementById('age')
const calOutputElement = document.getElementById('cal-output')

console.log(
	inputKmElement,
	inputWeightElement,
	calOutputElement,
	selectAgeElement
)

formElement.addEventListener('submit', function () {
	console.log('submit')
})

formElement.addEventListener('submit', function (event) {
	// impediamo l'invio del form
	event.preventDefault()

	// console.log('submit', event)

	// recupeare dall'input km il valore di km percorsi
	const km = parseFloat(inputKmElement.value) // number
	console.log(km)

	// recuperare dall'input peso il peso dell'utente
	const peso = parseFloat(inputWeightElement.value) // number
	console.log(peso)

	// recuperaion il valore della select age
	const selectedAge = selectAgeElement.value // string
	console.log(selectedAge) // ['','g','n','a']
	let calPerKg = 1

	if (selectedAge === 'giovane') {
		calPerKg = 0.95
	} else if (selectedAge === 'anziano') {
		calPerKg = 1.2
	}

	console.log(calPerKg)

	// calorie = num km * peso * calPerKg
	let calorieTotali = km * peso * calPerKg

	console.log(calorieTotali)
	calOutputElement.innerHTML = calorieTotali + ' cal'
})
