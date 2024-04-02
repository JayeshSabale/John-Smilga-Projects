import React from 'react'
import Book from './Book'

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book1.jpg',
}

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book2.jpg',
}

const thirdBook = {
  author: 'Joseph Murphy',
  title: 'The Power Of Your Subconscious Mind',
  img: './images/book3.jpg',
}

const forthBook = {
  author: 'Wonder House Books',
  title: 'Animals Tales From Panchtantra',
  img: './images/book4.jpg',
}

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>This is the content of the first Book</p>
        <button className="book-button">Click me</button>
      </Book>

      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />

      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />

      <Book
        author={forthBook.author}
        title={forthBook.title}
        img={forthBook.img}
      />
    </section>
  )
}

export default BookList
