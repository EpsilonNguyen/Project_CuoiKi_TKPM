import Login from './Login/Login';
import Admin from './Admin/Admin';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
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
