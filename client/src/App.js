import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Pages
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import NoMatch from './pages/NoMatch';
import "./style.css"

// Import Components
import Nav from './Components/Nav';

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
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
