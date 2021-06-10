import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ShiftList from './Components/ShiftList';
import Footer from './Components/Footer';
import About from './Components/About';


function App() {
  // const [shifts, setShifts] = useState([]);
  return (
    <div className="App">
      <Router>        
          <Navbar />
          <Route exact path="/" component={Home} />  
          <Route path="/about" component={About} />         
          <Route path="/registered-shifts" component={ShiftList} /> 
          <Footer />       
      </Router>
    </div>
  );
}

export default App;
