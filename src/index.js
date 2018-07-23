import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import { Component } from "react"
import Store from './components/store'
import Home from './screens/home'
import Volunteer from './screens/volunteer'
import Donate from './screens/donate'
import About from './screens/about'
import Contact from './screens/contact'
import NavBar from './components/navBar'

class Index extends Component {
    render() {
        return (
            <div>
                <h1>Petrolia Volunteer Fire Department</h1>
                <NavBar />
                <br/>
                <Provider store={Store}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/volunteer" component={Volunteer} />
                            <Route exact path="/donate" component={Donate} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        )
    }
};

render(<Index />, document.getElementById('root'));