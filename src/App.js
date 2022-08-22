import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';

import Navbar from './components/inc/Navbar';


function App() {


 return (
  
    <Router>
    <Navbar />
 


<Route path="/" exact  component={Home} />



    </Router>
    
  );
}

export default App;
