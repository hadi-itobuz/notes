import './App.css'
import { ToastContainer } from 'react-toastify'
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
import { Toaster } from 'react-hot-toast';

const isLoggedIn = async () => {//function to check if user is logged in or not on reload, by requesting for access token using refresh token
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
      localStorage.setItem('accessToken', response.data.accessToken);
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
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Login setLogin={setLogin} />} />
          <Route path="/register" element={<Register />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute login={login} />}>
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </Router>
      <Toaster/>
    </>
  )
}

export default App
