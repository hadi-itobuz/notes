import './App.css'
// import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import {useState } from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
const checkToken=()=>{
  const token=5;
}
function App() {
  const [login,setLogin]=useState(false);
  return (
    <>
 
      <Router>
        <Routes>
          <Route path="/" element={<Login setLogin={setLogin} />} />
          <Route path="/register" element={<Register />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute login={login} />}>
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
