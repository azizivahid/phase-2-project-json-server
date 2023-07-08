import React from "react";
import '../css/BookLists.css';
import Book from "./Book";
import NotLoggedIn from "./NotLoggedIn";

function ReadList({ readListData, bookUserData, updateBookList, isLoggedIn, deleteBook }) {
  const displayBooks = readListData.map(book => (
    <Book 
      key={book.primary_isbn10} 
      book={book} 
      bookUserData={bookUserData} 
      updateBookList={updateBookList} 
      isLoggedIn={isLoggedIn}
      deleteBook={deleteBook}
    />
  ))

  return (
    <div className="list-container">
      {isLoggedIn ? <h1 className="header">Have Read List</h1> : null}
      <div className="list">
        {isLoggedIn ? displayBooks : null}
      </div>
      {isLoggedIn ? null : <NotLoggedIn />}
    </div>
  )
}

export default ReadList;