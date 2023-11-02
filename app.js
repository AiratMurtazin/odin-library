'use strict'

const myLibrary = []
const openModal = document.querySelector('.new-book')
// const closeModal = document.querySelector('.modal')
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

// addBookToLibrary(theMetro2033)
// addBookToLibrary(generationP)
// addBookToLibrary(theWorm)

openModal.addEventListener('click', () => {
	const modal = document.createElement('dialog')
	modal.innerHTML = `
	<h3>Be aware to fill each position!</h3>
	<form>
	<label for='titleForm'>Title</label>
	<input type="text" name="titleForm" id="titleForm"  required/>
	<label for='authorForm'>Author</label>
	<input type="text" name="authorForm" id="authorForm"  required/>
	<label for='pagesForm'>Pages</label>
	<input type="text" name="pagesForm" id="pagesForm"  required/>
	<label for='pagesForm'>Pages</label>
	<input type="text" name="pagesForm" id="pagesForm"  required/>
	<label for='readForm'>Have you read it?</label>
	<input type="checkbox" name="pagesForm" id="pagesForm"  />
	<button type="submit">Add</button>
	<button class="closeModal">Close</button>
	</form>
	`
	modal.classList.add('modal')
	document.body.appendChild(modal)
	modal.showModal()
	closeModal.addEventListener('click', () => {
		modal.close()
	})
})
displayEachBook()
