import React from "react";

const Form = ({ book, setBook }) => {
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  let { titulo, autor, edicion } = book;

  const handleSubmit = async (e) => {
    e.preventDefault();
    edicion = parseInt(edicion, 10);
    //validacion de los datos
    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Debe completar todos los datos");
      return console.log("Datos incompletos");
    }
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    };
    await fetch("http://localhost:3002/api", requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    //reinicio state del libro
    setBook({
      titulo: "",
      autor: "",
      edicion: 0,
    });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="form-group mb-3 mt-3">
        <input
          onChange={handleChange}
          type="text"
          name="titulo"
          placeholder="Titulo"
          className="form-control"
          value={titulo}
        />
      </div>

      <div className="form-group mb-3">
        <input
          onChange={handleChange}
          type="text"
          name="autor"
          className="form-control"
          placeholder="Autor"
          value={autor}
        />
      </div>

      <div className="form-group mb-3">
        <input
          onChange={handleChange}
          type="number"
          name="edicion"
          placeholder="Edicion"
          className="form-control"
          value={edicion}
        />
      </div>

      {/* <div class="form-group mb-3">
        <input
          type="text"
          name="linkimg"
          placeholder="Link de imagen"
          class="form-control"
        />
      </div> */}

      <div className="form-group">
        <button type="submit" className="btn btn-success btn-block">
          Cargar producto
        </button>
      </div>
    </form>
  );
};

export default Form;
