import React from "react";
import "./App.css";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from "./Components/NavBar";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
  <div>
    <Router>
      <div className="App">
        <NavBar/>
        <div>
          <Routes>
            <Route exact path = "/" element = {<Home/>} />
          </Routes>
          <Routes>
            <Route exact path = "/logino" element = {<LoginPage/>} />
          </Routes>
          <Routes>
            <Route exact path = "/signup" element = {<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  </div>
  );
}

export default App;
