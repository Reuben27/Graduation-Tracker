import React from "react";
import "./App.css";
import Courses from "./components/courses/courses";
import Profile from "./components/dashboard/profile";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import CreateAccount from "./components/login/CreateAccountForm";
import LoginForm from "./components/login/LoginFrom";


function App() {
  return (
  <div>
    <Header/>
    <Profile/>
    <CreateAccount/>
    <Courses/>
    <Footer/>
  </div>
  );
}

export default App;
