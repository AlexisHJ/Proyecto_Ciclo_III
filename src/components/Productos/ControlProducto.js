import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
//import { Link } from "react-router-dom";
//import Search from "./Search";
import Seccion from "./Seccion";

function ControlProducto() {
  useEffect(() => {
    Axios.get("http://localhost:3001/readData")
      .then((response) => {
        setDataProducts(response.data);
        setFilterDataProduct(dataProducts);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

  const [dataProducts, setDataProducts] = useState([]);
  const [filterDataProduct, setFilterDataProduct] = useState([]);

  const SearchBar = () => (
    <div action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Buscar Producto"
        name="s"
      />
      <button type="submit" onClick={filterProduct}>
        Search
      </button>
    </div>
  );

  const filterProduct = (e) => {
    e.preventDefault();
    const filtroBusqueda = document.getElementById("header-search");
    const value = filtroBusqueda.value;
    setFilterDataProduct(
      dataProducts.filter((Producto) => {
        return Producto.descripcion.indexOf(value) > -1;
      })
    );
  };

  const renderProductos = () => {
    return (
      <tbody>
        {filterDataProduct.map((val, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{val.id}</td>
              <td>{val.valor}</td>
              <td>{val.estado}</td>
              <td>{val.descripcion}</td>
              <td>
                <button
                  className="edicion"
                  onClick={() => {
                    editarEstado(val._id);
                  }}
                >
                  EDITAR
                </button>
                <button
                  className="edicion"
                  onClick={() => {
                    borrarProducto(val._id);
                  }}
                >
                  ELIMINAR
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const borrarProducto = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  const editarEstado = (id) => {
    const newEstado = prompt("Ingrese el nuevo estado: ");
    Axios.put("http://localhost:3001/update", {
      id: id,
      newEstado: newEstado,
    });
  };

  return (
    <div className="listaProductos">
      {SearchBar()}
      <Seccion></Seccion>
      <button className="edicion">Edicionar Producto</button>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">VALOR</th>
            <th scope="col">ESTADO</th>
            <th scope="col">DESCRIPCION</th>
          </tr>
        </thead>

        {renderProductos()}
      </table>
    </div>
  );
}

export default ControlProducto;
