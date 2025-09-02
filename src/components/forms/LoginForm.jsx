import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { userContext } from '../../context/UserProvider';


const LoginForm = () => {

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",

    },

  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const {onSubmit} = useContext(userContext)

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            type="email"
            id="username"
            placeholder="Enter your mail id"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.username ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register("username", {
              required: {
                value: true,
                message: "Username is required"
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address"
              },
              validate: {
                notAdmin: (fieldName) => {
                  return fieldName !== "admin@example.com" || "Enter a different email id";
                }
              }
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register("password", {
              required: {
                value: true,
                message: "Password is required"
              }
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default LoginForm