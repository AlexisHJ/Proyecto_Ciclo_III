import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import ListaProducto from "./ListaProducto";

const [edicionEstado, setEdicionEstado] = "";

function EditarProducto() {
  /*
  useEffect(() => {
    Axios.get("http://localhost:3001/readData")
      .then((response) => {
        setEdicionEstado(response.data);
        const update = prompt("Editar Estado: ");
        console.log("Editado con exito");
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);*/

  return (
    <div>
      <ListaProducto />
    </div>
  );
}

export default EditarProducto;
