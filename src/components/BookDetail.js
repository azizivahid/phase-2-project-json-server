import React from 'react';
import '../css/BookLists.css'

function BookDetail({ book }) {
  return (
    <div className="book-detail">
      <h2>Book Details</h2>
      <h3>Description</h3>
      <p>{book.description}</p>
      <h5>Publisher: {book.publisher}</h5>
      <h5>Rank this week: {book.rank}</h5>
      <h5>Rank last week: {book.rank_last_week}</h5>
      <h5>Weeks on list: {book.weeks_on_list}</h5>
    </div>
  )
}

export default BookDetail;