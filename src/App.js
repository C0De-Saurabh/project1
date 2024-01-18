import logo from './logo.svg';
import React from 'react';
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';
import Header from './components/Header';

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
