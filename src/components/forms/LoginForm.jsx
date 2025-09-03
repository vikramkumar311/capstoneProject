import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/loginAuth';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/UserProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginScheme } from '../../validations/loginSchema';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  const form = useForm({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      username: "",
      password: "",
    },

  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const navigate = useNavigate();

  const { setServerError, setLoading, setStatus } = useContext(userContext)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit((data) => loginUser(data, navigate, setServerError, setLoading, setStatus))}
        noValidate
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>


        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            type="email"
            id="username"
            placeholder="Enter your mail id"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("username")}
          />
          <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>
        </div>


        {/* password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("password")}
          />
          <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
        </div>


        {/* Remember */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            {...register("rememberMe")}
          />
          <label htmlFor="rememberMe" className="ml-2 block text-gray-700 font-medium">
            Remember me
          </label>
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
        >
          Submit
        </button>

        <div className="mt-6 text-center">
          <span className="text-gray-700">New user? </span>
          <Link
            to="/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Create an account
          </Link>
        </div>

      </form>



    </div>
  )
}

export default LoginForm