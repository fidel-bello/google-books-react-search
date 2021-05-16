import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchBooks from './pages/SearchBooks';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <SearchBooks />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App;