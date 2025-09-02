
import './App.css'
import LoginForm from './components/loginFormComponent/LoginForm'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/HomePage'
import SignupForm from './components/signupFormComponent/SignupForm'

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
        <Route path='/signup' element={<SignupForm />}/>
        <Route path='/work' element={<Dashboard />}/>  
      </Routes>
    
  )
}

export default App
