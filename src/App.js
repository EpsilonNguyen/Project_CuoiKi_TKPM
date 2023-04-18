import HomePage from "./HomePage/HomePage";
import Product from "./Product/Product";
import ProductItem from "./Product/ProductItem";
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
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/product-items" exact>
          <ProductItem />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
