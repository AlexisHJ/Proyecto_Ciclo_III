import './App.css';
import {useState,useEffect} from 'react'
import Axios from 'axios'
//import addProduct from './components/Productos/addProduct';
//import listaProducto from './components/Productos/listaProducto'


function App() {

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
    <div className ='App'>
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
    </div>

  );
}

export default App;
