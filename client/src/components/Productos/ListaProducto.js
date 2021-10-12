import React from 'react'
import {useState,useEffect} from 'react'
import Axios from 'axios'

function ListaProducto() {


  const [dataProducts,setDataProducts] = useState ([])



  return (
    <div className = "listaProductos">
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
        
      </table>
    </div>
  )
}

export default ListaProducto
