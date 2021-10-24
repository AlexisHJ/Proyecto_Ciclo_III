import React from "react";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

function AddProduct() {
  const [id, setId] = useState("");
  const [valor, setValor] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("");

  const registrar = () => {
    Axios.post("http://localhost:3001/addProduct", {
      id: id,
      valor: valor,
      descripcion: descripcion,
      estado: estado,
    });
    Swal.fire("Registrado Exitosamente!", "Continuar", "success");
  };

  return (
    <div className="Reg_Product">
      <h1>Web Store</h1>
      <label>id:</label>
      <input
        type="text"
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <label>valor:</label>
      <input
        type="number"
        onChange={(event) => {
          setValor(event.target.value);
        }}
      />
      <label> Estado:</label>
      <div
        className="custom_select"
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      >
        <select>
          <option value="disponible">Disponible</option>
          <option value="no_disponible">No Disponible</option>
        </select>
      </div>
      <label>descripcion:</label>
      <input
        type="text"
        onChange={(event) => {
          setDescripcion(event.target.value);
        }}
      />
      <button onClick={registrar}> Registrar </button>
    </div>
  );
}

export default AddProduct;
