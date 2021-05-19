import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import "./style.css";
import Nav from './components/Nav';


function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/">
						<SearchBooks />
					</Route>
					<Route exact path="/saved">
						<SavedBooks />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
