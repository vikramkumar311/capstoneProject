import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginForm from '../components/forms/LoginForm'
import SignupForm from '../components/forms/SignupForm'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
  return (
    <Routes >
        
        <Route path='/' element={<HomePage />}/>
        <Route path='/loginform' element={<LoginForm />}/>
        <Route path='/signup' element={<SignupForm />}/>
        <Route path='/work' element={<Dashboard />}/>  
      </Routes>
  )
}

export default AppRoutes