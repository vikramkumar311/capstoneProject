
import './App.css'
import LoginForm from './components/LoginForm'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {
  

  return (

    // <>
    //   {/* <Nav /> */}
    //   <LoginForm />
    //   {/* <Work /> */}
    // </>

  
      <Routes >
        <Route path='/' element={<Login />}/>
        <Route path='/loginform' element={<LoginForm />}/>
        <Route path='/work' element={<Dashboard />}/>  
      </Routes>
    
  )
}

export default App
