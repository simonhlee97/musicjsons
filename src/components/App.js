import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Home from "components/Home";
import RockHall from "components/RockHall";
// import Airports from "components/Airports";
import Guitarists from "components/Guitarists";
import '../css/styles.css';

class App extends Component {

	// renderButton() {
	// 	if(this.props.auth) {
	// 		return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>;
	// 	} else { 
	// 		return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
	// 	}
	// }
	myNavbar() {
		return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				
		  
				<div className="collapse navbar-collapse show" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/">
					Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/rockhall">
					Rock & Roll Hall of Fame
					</Link>
				</li>
				
				<li className="nav-item">
					<Link className="nav-link" to="/guitarists">
					Female Classical Guitarists
					</Link>
				</li>
				</ul>
          	</div>
        </nav>
      </div>;
	}

	render() {
		return (
		<div>
			<div className="app">
				{ this.myNavbar() }
				<Route path="/rockhall" component={RockHall} />
				{/*<Route path="/airports" component={Airports} />*/}
				<Route path="/guitarists" component={Guitarists} />
				<Route path="/" exact component={Home} />
			</div>
				<div id='footer'>last modified: 15 October 2018 | <a href='https://simonhlee97.github.io/' target='_blank' rel="noopener noreferrer">Simon Lee</a></div>
		</div>
		);
	}
}



export default App

// Steps for creating Higher Order Components
// 1. write the logic you want to reuse in to an existing component
// 2. Create a H.O.C. file and add the HOC Scaffold.
// 3. Move the reusable logic into the HOC
// 4. Pass props/config/behavior thru to Child Component