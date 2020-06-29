import React, { Component } from 'react';
import './App.css';
import Employee from './components/Employee';
import Form from './components/Form';
import Data from './components/Data';

import Navbar from './components/layout/Navbar';
import About from './components/layout/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//  APP Component
class App extends Component {
	// This satae Hold value input
	state = {
		emp: [],
	};

	componentDidMount() {
		if (localStorage.length === 0) {
			this.setState({
				emp: [],
			});
		} else {
			this.setState({
				emp: JSON.parse(localStorage.getItem('emp')),
			});
		}
	}
	// Empuser is Props calling From Employee
	empUser = (newTodo) => {
		// const { emp } = this.state;
		// emp.push(newTodo);
		// this.setState({
		// 	emp,
		// });
		let title = newTodo;

		if (localStorage.getItem('emp') == null) {
			var emp = [];
			emp.push(title);
			localStorage.setItem('emp', JSON.stringify(emp));
		} else {
			emp = JSON.parse(localStorage.getItem('emp'));
			emp.push(title);
			localStorage.setItem('emp', JSON.stringify(emp));
		}
		this.setState({
			emp: JSON.parse(localStorage.getItem('emp')),
		});
	};

	render() {
		return (
			<Router>
				<Navbar />
				<Switch>
					<div className="container ">
						<Route exact path="/" render={() => <Employee empUser={this.empUser} />} />
						<Route exact path="/" render={() => <Data emps={this.state.emp} />} />
						<Route exact path="/" render={() => <Form emps={this.state.emp} />} />
						<Route exact path="/about" component={About} />
					</div>
				</Switch>
			</Router>
		);
	}
}
export default App;
