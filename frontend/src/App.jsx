import './App.css'
// import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
