console.log('FOR LOOP')

// if () {

// }

// let a = 1

// console.log(a)

// a++

// console.log(a) // 2

// a = a + 1

// console.log(a) // 3

// a += 1

// console.log(a) // 4

// a += 2

// console.log(a) // 6

console.log('prima del ciclo') // prima del ciclo

// incremento dell'indice
for (let i = 0; i < 3; i++) {
	console.log('ciao')
}

// let i = 0
// verifica che (i < 3) => (0 < 3) => true

// PRIMA ITERAZIONE
// console.log('ciao') => ciao
// i++ => i = i + 1 => i = 0 + 1 => i = 1
// verifica che (i < 3) => (1 < 3) => true

// SECONDA ITERAZIONE
// console.log('ciao') => ciao
// i++ => i = 1 + 1 => i = 2
// verifica che (i < 3) => (2 < 3) => true

// TERZA ITERAZIONE
// console.log('ciao') => ciao
// i++ => i = 2 + 1 => i = 3
// verifica che (i < 3) => (3 < 3) => false

// ESCO DAL CICLO

console.log('dopo il ciclo') // dopo il ciclo

for (let i = 0; i > 3; i++) {
	console.log('ciao')
}

// let i = 0
// verifica che (i > 3) => (0 > 3) => false
// ESCO DAL CICLO

// decremento dell'indice i

for (let i = 3; i > 0; i--) {
	console.log('ciao inverso')
}

// let i = 3
// i > 0 ? (3 > 0) => true

// PRIMA ITER
// console.log => ciao inverso
// i-- => i = 3 - 1 => i = 2
// i > 0 ? (2 > 0) => true

// SECONDA ITER
// console.log => ciao inverso
// i-- => i = 2 - 1 => i = 1
// i > 0 ? (1 > 0) => true

// TERZA ITER
// console.log => ciao inverso
// i-- => i = 1 - 1 => i = 0
// i > 0 ? (0 > 0) => false

// ESCO DAL CICLO

// stampiamo in console i numeri da 1 a 10
// Di quante iterazione abbiamo bisogno? stampare 10 numeri

const ulElement = document.getElementById('lista')

for (let i = 0; i < 100; i++) {
	// console.log('numero', i)
	let num = i + 1 // num = 0 + 1
	// let num = i * 5 // num = 0 + 1

	// ulElement.innerHTML = ulElement.innerHTML + '<li>' + num + '</li>'

	console.log(num)
}

// console.log(i) // num is not defined

// let i = 0
// (i < 10) 0 < 10 => true

// PRIMA ITER
// 'numero', i => 'numero', 0
// i = 1
// (i < 10) 1 < 10 => true

// SECONDA ITER
// 'numero',i => 'numero', 1

let a = 0
if (a === 0) {
	// questa var num è visibile sono dentro al blocco if
	let num = 10
}

// console.log(num) // var num is not defined
console.log(a)

const b = 21

// per controllare su un num è multiplo di un altro
let resto = 15 % 5 // 0 // FizzBuzz
resto = 9 % 3 // 0 // Fizz
resto = 10 % 5 // Buzz
