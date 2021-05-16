import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
            </div>
        </Router>
    )
}
export default App;