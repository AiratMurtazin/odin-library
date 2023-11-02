'use strict'

const myLibrary = []
const modal = document.querySelector('.modalWindow')
const openModal = document.querySelector('.new-book')
const closeModal = document.querySelector('.closeModal')

// const titleForm = document.getElementById('titleForm').value
// const authorForm = document.getElementById('authorForm').value
// const pagesForm = document.getElementById('pagesForm').value
// const readForm = document.getElementById('readForm').value

const submitBtn = document.querySelector('.submitForm')
const bookForm = document.querySelector('.book-form')

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
			<p class="el read">${this.read ? 'Have read already' : 'Not read yet'}</p></p>
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
	const bookContainer = document.getElementById('book-container')
	bookContainer.innerHTML = ''

	myLibrary.forEach(book => {
		const bookInfo = book.info()
		const div = document.createElement('div')
		div.innerHTML = bookInfo
		bookContainer.appendChild(div)
	})
}

// addBookToLibrary(new Book(...['The Sun', 'Ernest Heminguay', 200, true]))
openModal.addEventListener('click', () => {
	modal.showModal()
})

closeModal.addEventListener('click', e => {
	e.preventDefault()
	modal.close()
})

bookForm.addEventListener('submit', e => {
	e.preventDefault()

	addBookToLibrary(
		new Book(
			document.getElementById('titleForm').value,
			document.getElementById('authorForm').value,
			document.getElementById('pagesForm').value,
			document.getElementById('readForm').checked
		)
	)
	modal.close()
	displayEachBook()
	document.getElementById('titleForm').value = ''
	document.getElementById('authorForm').value = ''
	document.getElementById('pagesForm').value = ''
	document.getElementById('readForm').checked = false
})
