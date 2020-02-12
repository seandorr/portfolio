import React, { Component } from 'react';
import Borders from './Borders';
import NavBar from './NavBar';
import Home from './pages/Home';
import Wip from './pages/Wip';
import About from './pages/About';
import Contact from './pages/Contact';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<>
				<Borders />
				<NavBar />
				
				<div id="page-content">
					<BrowserRouter>
						<Switch>
							<Route 
								exact 
								path="/" 
								component={Home} 
							/>
							<Route 
								path="/wip" 
								component={Wip} 
							/>
							<Route 
								path="/about" 
								component={About} 
							/>
							<Route 
								path="/contact" 
								component={Contact} 
							/>
						</Switch>
					</BrowserRouter>
				</div>
			</>
		);
	}
}

export default App;