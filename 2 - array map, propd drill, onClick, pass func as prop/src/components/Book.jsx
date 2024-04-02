import React from 'react'

function Book(props) {
  const { id, title, img, author, number, getBook } = props
  return (
    <article className="book">
      <img src={img} alt={`pic of ${title}`} />
      <h2>{title}</h2>
      <button
        className="book-button"
        onClick={() => {
          getBook(id)
        }}
      >
        Click Me
      </button>
      <h4>{author}</h4>
      <span className="number">#{number + 1}</span>
      <hr />
    </article>
  )
}

export default Book
