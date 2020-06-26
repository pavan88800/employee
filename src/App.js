import React, { Component } from 'react'
import './App.css'
import Employee from './components/Employee'
import Form from './components/Form'
import Navbar from './components/layout/Navbar'
import About from './components/layout/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//  APP Component
class App extends Component {
  // This satae Hold value input
  state = {
    emp: []
  }

  // Empuser is Props calling From Employee
  empUser = newTodo => {
    const { emp } = this.state
    emp.push(newTodo)
    this.setState({
      emp
    })
  }

  render () {
    return (
      <Router>
        <Navbar />
        <Switch>
          <div className='container '>
            <Route
              exact
              path='/'
              render={() => <Employee empUser={this.empUser} />}
            />
            <Route
              exact
              path='/'
              render={() => <Form emps={this.state.emp} />}
            />
            <Route exact path='/about' component={About} />
          </div>
        </Switch>
      </Router>
    )
  }
}
export default App
