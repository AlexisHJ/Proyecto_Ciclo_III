import './App.css';
//import AddProduct from './components/Productos/AddProduct';
//import ListaProducto from './components/Productos/ListaProducto';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from  './Routes'


function App() {
  return (
    <Router>
      <div className ='App'>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
