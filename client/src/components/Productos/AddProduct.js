import React from 'react'
import {useState,useEffect} from 'react'
import Axios from 'axios'

function AddProduct() {

  const [id,setId] = useState("")
  const [valor,setValor] = useState(0)
  const [descripcion,setDescripcion] = useState("")
  const [estado,setEstado] = useState("")

  const [dataProducts,setDataProducts] = useState ([])

  const registrar = () => {
    Axios.post('http://localhost:3001/addProduct',{
      id:id,
      valor:valor,
      descripcion:descripcion,
      estado:estado
    })
  }

  useEffect(()=>{
    Axios.get('http://localhost:3001/readData')
    .then((response) =>{
      setDataProducts(response.data)

    }).catch(()=>{
      console.log("ERR")
    })
  },[])

    return (
        <div className="Reg_Product">
          <h1>Web Store</h1>
          <label>id:</label>
          <input type="text" onChange={(event) => {setId(event.target.value)}}/>
          <label>valor:</label>
          <input type="number" onChange={(event) => {setValor(event.target.value)}}/>
          <label>estado:</label>
          <input type="text" onChange={(event) => {setEstado(event.target.value)}}/>
          <label>descripcion:</label>
          <input type="text" onChange={(event) => {setDescripcion(event.target.value)}}/>
    
          <button onClick = {registrar}> Registrar </button>
        </div>
    )
}

export default AddProduct
