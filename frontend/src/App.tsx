import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
      <ToastContainer key={'main'} closeButton/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/blog/:id' element={<Blog />} />
              <Route path='/publish' element={<Publish />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
