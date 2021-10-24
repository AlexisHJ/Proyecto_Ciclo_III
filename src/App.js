import "./App.css";
//import AddProduct from './components/Productos/AddProduct';
//import ListaProducto from './components/Productos/ControlProducto';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
};

export default App;
