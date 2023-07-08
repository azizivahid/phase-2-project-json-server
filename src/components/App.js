import '../css/App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import BookListContainer from "./BookListContainer";

function App() {
  const api = process.env.REACT_APP_NYT_KEY;
  const [status, setStatus] = useState('idle');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookData, setBookData] = useState([]);
  const [bookUserData, setBookUserData] = useState([]);

  useEffect(() => {
    setStatus("loading");
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${api}`)
      .then(r => r.json())
      .then(books => {
        setBookData(books.results.books)
        setStatus('idle');
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then(r => r.json())
      .then(userBooks => {
        setBookUserData(userBooks);
      })
  }, [])

  function handleLogInClick(e) {
    setIsLoggedIn(!isLoggedIn);
  }

  function addBookToList(book) {
    const newBookList = [...bookUserData, book]
    setBookUserData(newBookList)
  }

  function updateBookList(book) {
    const updatedList = bookUserData.map(oldBook => {
      if (oldBook.id === book.id) return book;
      return oldBook;
    })
    setBookUserData(updatedList)
  }

  function deleteBook(book) {
    const updatedList = bookUserData.filter(oldbook => oldbook.id !== book.id)
    setBookUserData(updatedList)
  }

  return (
    <div>
      <header className="App-header">
        The New York Times Reading List
      </header>
      <NavBar isLoggedIn={isLoggedIn} handleLogInClick={handleLogInClick} />
      {status === 'loading' ? "Loading..." : 
        <BookListContainer 
          bookData={bookData} 
          bookUserData={bookUserData} 
          addBookToList={addBookToList} 
          updateBookList={updateBookList}
          isLoggedIn={isLoggedIn}
          deleteBook={deleteBook}
        />
      }
    </div>

  );
}

export default App;