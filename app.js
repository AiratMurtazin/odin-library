'use strict'

const myLibrary = []

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function () {
		return `<article class="single-book">
			<h2 class="el title">${this.title}</h2>
			<h4 class="el author">${this.author}</h4>
			<p class="el pages">${this.pages}</p>
			<p class="el read">${this.read}</p></p>
		</article>`
	}
}

const theMetro2033 = new Book(
	'Metro 2033',
	'Dmitri Gluhovsky',
	321,
	'have read already'
)
const generationP = new Book(
	'Generation P',
	'Viktor Pelevin',
	260,
	'have read already'
)

const theWorm = new Book('The Worm', 'John Faulse', 500, 'not read yet')

function addBookToLibrary(book) {
	myLibrary.push(book)
}

function displayEachBook() {
	myLibrary.forEach(book => {
		document.body.innerHTML += book.info()
	})
}

addBookToLibrary(theMetro2033)
addBookToLibrary(generationP)
addBookToLibrary(theWorm)
displayEachBook()
