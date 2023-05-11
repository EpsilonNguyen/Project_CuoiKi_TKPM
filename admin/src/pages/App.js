import Login from './Login/Login';
import Admin from './Admin/Admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <ToastContainer position="bottom-center" limit={1} autoClose={2000} pauseOnHover={false} />
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
