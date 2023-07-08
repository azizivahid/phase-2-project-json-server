import React from "react";
import Book from "./Book";
import '../css/BookLists.css'

function Home({ bookData, bookUserData, addBookToList, isLoggedIn }) {
  const displayBooks = bookData.map(book => (
    <Book 
      key={book.primary_isbn10} 
      book={book} 
      bookUserData={bookUserData} 
      addBookToList={addBookToList}
      isLoggedIn={isLoggedIn} 
    />
  ))

  return (
    <div className="list-container">
      <h1 className="header">Current Hardcover Best Sellers List</h1>
      <div className="list">
        {displayBooks}
      </div>
    </div>
  )
}

export default Home;