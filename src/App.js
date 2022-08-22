import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/pages/Home';

import Navbar from './components/inc/Navbar';


function App() {


 return (
  
    <Router>
    <Navbar />
    <Redirect exact from="/" to="/home" />
  <Route path="/home">
    <Home />
  </Route>
<Switch>
<Redirect exact from="/" to="/home" />
<Route path="/" exact  component={Home} />

</Switch>

    </Router>
    
  );
}

export default App;
