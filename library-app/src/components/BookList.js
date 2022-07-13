import React from "react";

const BookList = ({ books, book, setBook }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("http://localhost:3002/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));
  };

  const handleUpdate = (id) => {
    const requestInit = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(book),
    };

    if (book.titulo === "" && book.autor === "" && book.edicion <= 0) {
      alert("Debe completar todos los datos");
      return console.log("Datos incompletos");
    }
    fetch("http://localhost:3002/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setBook({
      titulo: "",
      autor: "",
      edicion: 0,
    });
  };

  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.titulo}</td>
            <td>{book.autor}</td>
            <td>{book.edicion}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(book.id)}
                  className="btn btn-danger btn-sm"
                >
                  Borrar
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(book.id)}
                  className="btn btn-dark btn-sm"
                >
                  Update
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
