import React, { useState, useEffect } from 'react';
import ReviewDetails from "./ReviewDetails";
import '../css/BookLists.css';

function ReviewForm({ book, updateBookList }) {
  const [review, setReview] = useState(book.review);
  const [hasReview, setHasReview] = useState(false)

  useEffect(() => {
    if (book.review !== '') {
      setHasReview(true);
    }
  }, [])

  function handleReviewChange(e) {
    setReview(e.target.value)
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: review
      })
    })
      .then(r => r.json())
      .then(updatedBook => {
        updateBookList(updatedBook)
        setHasReview(true)
      })
  }

  function handleEditReview(e) {
    setHasReview(false)
  }

  function handleDeleteReview(e) {
    setReview('');
    fetch(`http://localhost:3001/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: ""
      })
    })
      .then(r => r.json())
      .then(updatedBook => {
        updateBookList(updatedBook)
        setHasReview(false)
      })
  }

  return (
    <div className="review-book">
      {!hasReview ? <form className="review-form" onSubmit={handleReviewSubmit}>
        <input type="textarea" value={review} placeholder="Enter your review here" onChange={handleReviewChange}></input>
        <input className="submit-review" type="submit" value="Submit Review"></input>
      </form> : null}
      {hasReview ? <ReviewDetails book={book} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview} /> : null}
    </div>
  )
}

export default ReviewForm;