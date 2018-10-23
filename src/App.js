import React, { Component } from 'react';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Routes from './routes/'
import './styles/App.css'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL} history = {history}>
            <Routes/>
        </Router>
    )
  }
}

export default App
