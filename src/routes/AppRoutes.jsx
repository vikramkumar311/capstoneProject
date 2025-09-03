import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginForm from '../components/forms/LoginForm'
import SignupForm from '../components/forms/SignupForm'
import Dashboard from '../pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes >

      <Route path='/' element={<HomePage />} />
      <Route path='/loginform' element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm />} />

      {/* Protected Route */}
      <Route path='/work' element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default AppRoutes