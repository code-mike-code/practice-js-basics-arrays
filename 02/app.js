const randomArray = createRandomArray()
console.log(randomArray)

// petla FOR
console.log('Elementy tablicy wyswietlone prz użyciu petli FOR:')
for (let i = 0; i < randomArray.length; i++) {
	console.log(randomArray[i])
}

//metoda FOR EACH

console.log('Elementy tablicy wyswietlone prz użyciu metody forEach:')
randomArray.forEach(element => {
	console.log(element)
})

// ostatni element tblicy
const lastElement = randomArray[randomArray.length - 1]
console.log('Ostatni element tablicy(array):', lastElement)

// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
	const arr = []
	const len = getRandomInteger(1, 10)
	for (let i = 0; i < len; i++) {
		arr.push(getRandomInteger(1, 100))
	}

	return arr
}

function getRandomInteger(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}
