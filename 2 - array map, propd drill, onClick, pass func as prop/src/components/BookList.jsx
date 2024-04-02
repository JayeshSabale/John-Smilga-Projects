import React from 'react'
import Book from './Book'
import books from './books.js'

function BookList() {
  function getBook(id) {
    const singleBook = books.find((book) => {
      return book.id === id
    })

    if (singleBook) {
      alert(`you clicked on book number ${id}`)
      console.log(singleBook)
    } else {
      alert(`Book with id ${id} not found`)
    }

    return singleBook // Return the found book
  }

  return (
    <>
      <h1 className="title">The Best Selling Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book key={book.id} {...book} getBook={getBook} number={index} />
          )
        })}
      </section>
    </>
  )
}

export default BookList
