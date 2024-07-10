console.log('ARRAY')

// DICHIARIAMO UNA VARIBILE DI TIPO ARRAY
let nomi = ['Gianni', 'Maria', 'Giuseppe', 'Carlo'] // array(string)
console.log(nomi, nomi.length)

let numeri = [2, 6, 9, 4, 5, 26, 31] // array(number)
console.log(numeri, numeri.length)

let altro = [] // array(?)
console.log(altro, altro.length)

let condizioni = [true, true, false, true, true, false] // array(boolean)
console.log(condizioni, condizioni.length)

// ARRAY CON VALORI MISTI
let macedonia = [true, 'ciao', 2, ['pippo'], {}, function () {}, 3] // array(any)
console.log(macedonia)

// LEGGERE LA LUNGHEZZA DI ARRAY (numero di el che compone l'array)
const lunghezzaArray = condizioni.length
console.log(lunghezzaArray)

// LEGGERE UN SINGOLO ELEMENTO DA UN ARRAY
console.log(nomi[2]) // 'Giuseppe'

let numero = macedonia[2]
console.log(numero) // 2

// STAMPA IL PRIMO ELEMENTO DI UN ARRAY
// i = 0
console.log(condizioni[0])

// STAMPA L'ULTIMO ELEMENTO DI UN ARRAY
// se array.length === 100 => lastIndex = 99
// se array.length === 9 => lastIndex = 8
// se array.length === 51 => lastIndex = 50
let lastIndex = macedonia.length - 1 // number(6)

console.log(macedonia[lastIndex]) // macedonia[6] => 3

// SOSTITUIRE O AGGIUGNERE UN NUOVO VALORE IN UNA POSIZIONE NOTA
numeri[3] = 12

// ASSEGNARE UN VALORE AD UN INDICE INESISTENTE
// numeri[100] = 30
// console.log(numeri)

// ACCEDERE AD INDICE INESISTENTE
// console.log(numeri[55], numeri[120]) // undefined

// PUSHIAMO UNO o PIU ELEMENTi IN UN ARRAY
// AGGIUNGERE IN CODA
nomi.push('Mimmo')
nomi.push('Antonio', 'Anita')

// AGGIUNGERE IN TESTA
nomi.unshift('Mario')
console.log(nomi)

const ultimoNome = nomi.pop()
console.log(ultimoNome, nomi)

// ARRAY e CICLO FOR

const nomiUtente = ['Carmelo', 'Pasquale', 'Alessia', 'Alessandra', 'Michela'] //length 5
console.log(nomiUtente)

// nomiUtente[20] = 'Sara'

// FOR CHE FA 5 ITERAZIONI i = 0 | 4
for (let i = 0; i < nomiUtente.length; i++) {
	// console.log(i)
	let nomeCorrente = nomiUtente[i]
	console.log(i, nomeCorrente)
	// console.log('Ciao ' + nomeCorrente + '. Benveuto/a!')
}

// let i = 0
// i < 5 => 0 < 5 => true

// I iterazone
// let nomeCorrente = nomiUtente[0] => 'Carmelo'
// console.log(i,nomeCorrente) => 0 , 'Carmelo'
// i++ => i = 1
// i < 5 => 1 < 5 => true

// II iterazone
// let nomeCorrente = nomiUtente[1] => 'Pasquale'
// console.log(i,nomeCorrente) => 1 , 'Pasquale'
// i++ => i = 2
// i < 5 => 2 < 5 => true

// III iterazone
// let nomeCorrente = nomiUtente[2] => 'Alessia'
// console.log(i,nomeCorrente) => 2 , 'Alessia'
// i++ => i = 3
// i < 5 => 3 < 5 => true

// ...

// let numeri = [2, 6, 9, 4, 5, 26, 31]
console.log('__ CALCOLARE POTENZE __')
console.log(numeri)

let quadrati = []
console.log(quadrati) // []

// PER OGNI numero dell'array numeri
for (let i = 0; i < numeri.length; i++) {
	const num = numeri[i]
	// - calcolo il quadrato del numero
	// const pow2 = num ** 2
	const pow2 = Math.pow(num, 2)
	console.log(num, pow2)
	// - pusho il quadrato nel nuovo array
	quadrati.push(pow2)
	console.log(quadrati)
}

console.log(quadrati)
