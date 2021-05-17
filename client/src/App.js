import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SavedBooks from './pages/Saved';
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
                    <Route exact path='saved'>
                        <SavedBooks />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App;