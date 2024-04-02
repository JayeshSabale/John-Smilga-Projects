import React from 'react'

function Book({ title, img, author, children }) {
  return (
    <article className="book">
      <img src={img} alt={`pic of ${title}`} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
      <hr />
    </article>
  )
}

export default Book
