import React from 'react';

function ReviewDetails({ book, handleEditReview, handleDeleteReview }) {
  return (
    <div>
      <h4>User Review:</h4>
      <p>{book.review}</p>
      <button className="edit-review" onClick={e => handleEditReview(e)}>Edit Review</button>
      <button className="delete-review" onClick={e=> handleDeleteReview(e)}>Delete Review</button>
    </div>
  )
}

export default ReviewDetails;