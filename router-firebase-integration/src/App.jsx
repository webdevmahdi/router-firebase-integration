import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Header from './Components/Header/Header'
import Register from './Components/Register/Register'

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
