import React from 'react'
import {useState,useEffect} from 'react'
import Axios from 'axios'

function ListaProducto() {

  useEffect(()=>{
    Axios.get('http://localhost:3001/readData')
    .then((response) =>{
      setDataProducts(response.data)

    }).catch(()=>{
      console.log("ERR")
    })
  },[])


  const [dataProducts,setDataProducts] = useState ([])

  const renderProductos= ()=>{
    return(
      <tbody>
      {dataProducts.map((val,index)=>{
        return( 
          <tr key ={index}>
            <th scope="row">{index+1}</th>
            <td>{val.id}</td>
            <td>{val.valor}</td>
            <td>{val.estado}</td>
            <td>{val.descripcion}</td>
            <td> EDITAR |  ELIMINAR </td>
          </tr>
        )
      })}
      </tbody>
    )
  }



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

        {renderProductos()}
        
      </table>
    </div>
  )
}

export default ListaProducto
