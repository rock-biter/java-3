console.log('snack 01')
/**
 * L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */

let a = parseFloat(prompt('Inserisci il primo numero')) // number
let b = parseFloat(prompt('Inserisci il secondo numero')) // number

let maggiore = Math.max(a, b)

// if (a > b) {
// 	maggiore = a
// } else {
// 	maggiore = b
// }

console.log('Il maggiore è: ' + maggiore)
