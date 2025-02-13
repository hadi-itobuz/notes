import './App.css'
import { ToastContainer } from 'react-toastify'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Toaster } from 'react-hot-toast';
import Verify from './Pages/Verify';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/verify/:token' element={<Verify />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
