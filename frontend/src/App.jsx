import './App.css'
import { ToastContainer } from 'react-toastify'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Toaster } from 'react-hot-toast';
import Verify from './Pages/Verify';
import HomeHeader from './components/HomeHeader';
import NotesContainer from './components/NotesContainer';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>

          <Route path='/' element={<HomeHeader />} >
            <Route index element={<NotesContainer />} />
            <Route path='home' element={<NotesContainer />} />
            <Route path='profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/verify/:token' element={<Verify />} />
        </Routes>
      </Router>
      <Toaster />
    </>

  )
}

export default App

