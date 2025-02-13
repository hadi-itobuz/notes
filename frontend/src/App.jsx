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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/'element={<div className='text-white text-7xl'>Home</div>}  >
            <Route index path='home'  element={<Home />} />
          </Route>
          <Route path='/verify/:token' element={<Verify />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
