console.log('Objects')

// const prodotto1 = {
// 	name: 'Sapone liquido',
// 	price: 19.9,
// 	description: 'Il sapone ideale per chi scrive codice',
// }
// console.log(prodotto1)

// const prodotto2 = {
// 	name: 'Pannolini Pampers 4',
// 	price: 29.99,
// 	description: 'Il migliori pannolini sul mercato',
// }
// console.log(prodotto2)

// const prodotto3 = {
// 	name: 'Fusilli 500g',
// 	price: 0.79,
// 	description: 'Fatta con grano italiano',
// }
// console.log(prodotto3)

// const prodotti = [prodotto1, prodotto2, prodotto3]

const prodotti = [
	{
		name: 'Sapone liquido',
		price: 19.9,
		description: 'Il sapone ideale per chi scrive codice',
	},
	{
		name: 'Pannolini Pampers 4',
		price: 29.99,
		description: 'Il migliori pannolini sul mercato',
		// propName: 'ciao Beel',
	},
	{
		name: 'Fusilli 500g',
		price: 0.79,
		description: 'Fatta con grano italiano',
	},
]
console.log(prodotti)
// console.log(prodotti[0])
// console.log(prodotti[1])
// console.log(prodotti[2])

let confezionePannolini = prodotti[1] // Object
// DOT NOTATION
// console.log(confezionePannolini.price)
// BRACKETS NOTATION
// console.log(confezionePannolini['price'])
// console.log(prodotti[1].price)

// const propName = prompt(
// 	'Cosa vuoi sapere di questo prodotto? [name,price, description]'
// )
// console.log(propName) // name

// accedere alla proprieta porpName dell'ggetto confezionePannolini
// console.log(confezionePannolini.propName) // undefined

// accedere in maniera dinamica alle proprietà di un oggetto
// console.log(confezionePannolini[propName]) // ??

const messages = []
const productsListElement = document.getElementById('products')

for (let i = 0; i < prodotti.length; i++) {
	const prodottoCorrente = prodotti[i] // Object
	console.log(i, prodottoCorrente)

	const name = prodottoCorrente.name
	const price = prodottoCorrente.price
	const description = prodottoCorrente.description

	console.log(name, price, description)

	const html = `
  <li>
    ${name} - ${price.toFixed(2)} Euro
  </li>
  `

	productsListElement.innerHTML += html

	const messaggio = `Nome prodotto: ${name}; Prezzo: ${price} Euro; Descrizione: ${description}.`

	messages.push(messaggio)
	// console.log(messaggio)
}

console.log(messages)
