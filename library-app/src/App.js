import React, { Fragment, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import Form from "./components/Form";

function App() {
  const [book, setBook] = useState({
    titulo: "",
    autor: "",
    edicion: 0,
  });
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = () => {
      fetch("http://localhost:3002/api/libros")
        .then((res) => res.json())
        .then((res) => setBooks(res));
    };

    getBooks();
  }, [books]);

  return (
    <Fragment>
      <NavBar brand="Library App" />
      <div className="container ">
        <div className="row">
          <div className="col-7">
            <h2>Book List</h2>
            <BookList book={book} books={books} setBook={setBook} />
          </div>
          <div className="col-5">
            <h2>Form Book</h2>
            <Form book={book} setBook={setBook} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
