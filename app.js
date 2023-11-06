'use strict'

// Define an array to store the library books
const myLibrary = []

// Get DOM elements
const modal = document.querySelector('.modalWindow')
const openModal = document.querySelector('.new-book')
const closeModal = document.querySelector('.closeModal')
const bookForm = document.querySelector('.book-form')
const bookContainer = document.getElementById('book-container')

// Book constructor function
function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

// Book prototype to generate book info HTML
Book.prototype.info = function () {
	return `
    <article class="single-book">
      <h2 class="el title">${this.title}</h2>
      <h4 class="el author">${this.author}</h4>
      <p class="el pages">${this.pages}</p>
      <button class="el btnRead ${this.read ? 'read' : 'notRead'}">${
		this.read ? 'Read' : 'Not read'
	}</button>
      <button class="removeBook">Remove</button>
    </article>
  `
}

// Function to add a book to the library
function addBookToLibrary(book) {
	myLibrary.push(book)
}

// Function to display all books in the library
function displayEachBook() {
	bookContainer.innerHTML = ''

	myLibrary.forEach((book, index) => {
		const bookInfo = book.info()
		const div = document.createElement('div')
		div.innerHTML = bookInfo
		bookContainer.appendChild(div)

		const btnRead = div.querySelector('.btnRead')
		const removeBook = div.querySelector('.removeBook')

		btnRead.addEventListener('click', () => {
			// Toggle the read status
			book.read = !book.read
			displayEachBook()
		})

		removeBook.addEventListener('click', () => {
			// Remove the book from the library
			myLibrary.splice(index, 1)
			displayEachBook()
		})
	})
}

// Event listener for opening the modal
openModal.addEventListener('click', () => {
	modal.showModal()
})

// Event listener for closing the modal
closeModal.addEventListener('click', () => {
	modal.close()
})

// Event listener for submitting the book form
bookForm.addEventListener('submit', e => {
	e.preventDefault()

	// Create a new book and add it to the library
	const newBook = new Book(
		document.getElementById('titleForm').value,
		document.getElementById('authorForm').value,
		document.getElementById('pagesForm').value,
		document.getElementById('readForm').checked
	)

	addBookToLibrary(newBook)

	// Close the modal, reset the form, and display the updated library
	modal.close()
	bookForm.reset()
	displayEachBook()
})
