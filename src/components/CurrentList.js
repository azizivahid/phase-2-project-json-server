import React from "react";
import '../css/BookLists.css';
import Book from "./Book";
import NotLoggedIn from "./NotLoggedIn";

function CurrentList({ currentListData, bookUserData, updateBookList, isLoggedIn, deleteBook }) {
  const displayBooks = currentListData.map(book => (
    <Book 
      key={book.primary_isbn10} 
      book={book} 
      bookUserData={bookUserData} 
      updateBookList={updateBookList} 
      isLoggedIn={isLoggedIn}
      deleteBook={deleteBook}
    />
  ))

  const loginNotif = <h3>Please Log In</h3>

  return (
    <div className="list-container">
      {isLoggedIn ? <h1 className="header">Currently Reading List</h1> : null}
      <div className="list">
        {isLoggedIn ? displayBooks : null}
      </div>
      {isLoggedIn ? null : <NotLoggedIn />}
    </div>
  )
}

export default CurrentList;