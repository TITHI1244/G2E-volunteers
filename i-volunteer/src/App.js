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
  const [shifts, setShifts] = useState([]);
  const addNewShift = (fullName, userName, email, contact, gender, startTime, endTime, skills) => {
    const newShift = {fullName, userName, email, contact, gender, startTime, endTime, skills};
    setShifts([...shifts, newShift]);
}
  return (
    <div className="App">
      <Router>        
          <Navbar />
          <Route exact path="/">
            <Home addNewShift={addNewShift} />
          </Route>  
          <Route path="/about" component={About} />         
          <Route path="/registered-shifts">
            <ShiftList shifts={shifts} addNewShift={addNewShift}/>
          </Route>
          <Footer />       
      </Router>
    </div>
  );
}

export default App;
