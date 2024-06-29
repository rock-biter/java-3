console.log('ciao')

// console.log(document)
// recuperare un elemento dal DOM in base all'id
const titleElement = document.getElementById('titolo') // Object | null
console.dir(titleElement)

console.log(titleElement.innerHTML) // Ciao

// modificare il contenuto HTML di un elemento HTML
titleElement.innerHTML = 'Ciao mi chiamo Giangi'

// Aggiungere stile inline
titleElement.style.fontSize = '50px'

// Modificare l'attribulo class
titleElement.className = 'bg-red d-flex'

// a partire da un prezzo base, calcoliamo un prezzo scontato del 20%
// es. 100 Euro -> -20% => 80 Euro
// es. 23.64 Euro -> -20% => ??
// 100% => 1  (100 / 100)
// 50% => 0.5 (50 / 100)
// 20% => 0.2 (20 / 100)
// 150% => 1.5 (150 / 100)

let prezzoBase = 23.64

// calcolare lo sconto
let sconto = prezzoBase * 0.2
// prezzo scontato = prezzo intero - sconto

let prezzoScontato = prezzoBase - sconto
// let prezzoScontato = prezzoBase * (0.8)
console.log(prezzoScontato)
