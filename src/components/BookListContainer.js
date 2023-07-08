import React from "react";
import { Route, Switch } from "react-router-dom";
import ToReadList from "./ToReadList";
import ReadList from "./ReadList";
import CurrentList from "./CurrentList";
import Home from "./Home";

function BookListContainer({ bookData, bookUserData, addBookToList, updateBookList, isLoggedIn, deleteBook }) {
  const currentListData = bookUserData.filter(book => book.list === "currently-reading");
  const toReadListData = bookUserData.filter(book => book.list === "to-read");
  const readListData = bookUserData.filter(book => book.list === "have-read");

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home 
            bookData={bookData} 
            bookUserData={bookUserData} 
            addBookToList={addBookToList} 
            isLoggedIn={isLoggedIn} 
          />
        </Route>
        <Route path="/currently-reading">
          <CurrentList 
            currentListData={currentListData} 
            bookUserData={bookUserData} 
            updateBookList={updateBookList} 
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
          />
        </Route>
        <Route path="/have-read">
          <ReadList 
            readListData={readListData} 
            bookUserData={bookUserData} 
            updateBookList={updateBookList} 
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
          />
        </Route>
        <Route path="/to-read">
          <ToReadList 
            toReadListData={toReadListData} 
            bookUserData={bookUserData} 
            updateBookList={updateBookList} 
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default BookListContainer;