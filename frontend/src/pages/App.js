import Login from './Login/Login';
import Register from './Login/Register';
import HomePage from './HomePage/HomePage';
import Product from './Product/Product';
import ProductItem from './Product/ProductItem';
import ProductInfo from './Product/ProductInfo';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <ToastContainer position="bottom-center" limit={1} autoClose={2000} pauseOnHover={false} />
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
                <Route path="/product" exact>
                    <Product />
                </Route>
                <Route path="/product-items" exact>
                    <ProductItem />
                </Route>
                <Route path="/product-info" exact>
                    <ProductInfo />
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
