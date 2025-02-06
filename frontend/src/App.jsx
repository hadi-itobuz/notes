import './App.css'
// import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import { useState } from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import axios from 'axios';
const isLoggedIn =async () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/user/getAccessToken',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('refreshToken')}` 
    }
  };
  axios.request(config)
    .then((response) => {
      localStorage.setItem('accessToken',response.data.accessToken);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });

}
function App() {
  const [login, setLogin] = useState(isLoggedIn());
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
