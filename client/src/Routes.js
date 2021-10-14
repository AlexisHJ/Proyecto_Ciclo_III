import React from "react";
import { Route, Switch } from "react-router-dom";
import AddProduct from "./components/Productos/AddProduct";
import ListaProducto from "./components/Productos/ListaProducto";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AddProduct} />
      <Route exact path="/agregar" component={AddProduct} />
      <Route exact path="/listarProductos" component={ListaProducto} />
    </Switch>
  );
};
export default Routes;
