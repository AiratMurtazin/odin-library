'use strict'

const myLibrary = []
const modal = document.querySelector('.modalWindow')
const openModal = document.querySelector('.new-book')
const closeModal = document.querySelector('.closeModal')
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
			<button class="el btnRead ${this.read ? 'read' : 'notRead'}">${
			this.read ? 'Read' : 'Not read'
		}</button>
		<button class="removeBook">Remove</button>
		</article>`
	}
}

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
	const readBtn = document.querySelector('.read')
	const notReadBtn = document.querySelector('.notRead')
	const btnRead = document.querySelector('.btnRead')
	const removeBook = document.querySelector('.removeBook')

	btnRead.addEventListener('click', () => {
		if (btnRead.classList.contains('read')) {
			btnRead.classList.remove('read')
			btnRead.classList.add('notRead')
			btnRead.textContent = 'Not read'
		} else {
			btnRead.classList.remove('notRead')
			btnRead.classList.add('read')
			btnRead.textContent = 'Read'
		}
	})

	removeBook.addEventListener('click', e => {
		let index = myLibrary.indexOf(e.target.parentNode)
		myLibrary.splice(index, 1)
		displayEachBook()
	})
}

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
