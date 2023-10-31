'use strict'

const myLibrary = []

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
	}
}

const theMetro2033 = new Book(
	'Metro 2033',
	'Dmitri Gluhovsky',
	321,
	'have read already'
)

function addBookToLibrary(book) {
	myLibrary.push(book)
}

addBookToLibrary(theMetro2033)
console.log(myLibrary)
