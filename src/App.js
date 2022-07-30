import { Route, Switch } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './pages';

function App() {

    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
        </Switch>
    );
}

export default App;
