import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom'
import Routes from './Components/Routes';
import Home from './Components/Home';



class App extends Component {

  render() {
    
    return (
        <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <Routes></Routes>
        </div>
        <Home></Home>
        </BrowserRouter>
    );
  }
}

export default App;
