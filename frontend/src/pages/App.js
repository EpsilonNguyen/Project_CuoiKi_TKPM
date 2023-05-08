import Login from './Login/Login';
import Register from './Login/Register';
import HomePage from "./HomePage/HomePage";
import Product from "./Product/Product";
import ProductItem from "./Product/ProductItem";
import ProductInfo from './Product/ProductInfo';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Admin from './Admin/Admin';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/product-items">
          <ProductItem />
        </Route>
        <Route path="/product-info">
          <ProductInfo />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
