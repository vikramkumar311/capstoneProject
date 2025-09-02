import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { userContext } from '../../context/UserProvider';
import './SignupForm.css'

const SignupForm = () => {

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
    },

  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const { onSubmitSignup } = useContext(userContext)


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmitSignup)}
        noValidate
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        {/* first name */}
        <div className="mb-4">
          <label htmlFor="firstName" className='form-label'>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("firstName", {
              required: {
                value: true,
                message: "first name is required"
              },
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.firstName?.message}</p>
        </div>


        {/* last name */}
        <div className="mb-4">
          <label htmlFor="lastName" className='form-label'>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("lastName", {
              required: {
                value: true,
                message: "last name is required"
              },
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.lastName?.message}</p>
        </div>

        {/* mobile phone */}
        <div>
          <label htmlFor="phoneNumber">
            Phone Number
          </label>
          <input 
            type="number" 
            id="number"
            placeholder='Enter your number'
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Phone number is required"
              }
            })}
          />
        </div>

        
        {/* email address */}
        <div className="mb-4">
          <label htmlFor="email" className='form-label'>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your mail address"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("email", {
              required: {
                value: true,
                message: "email is required"
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
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>


        {/* Dob address */}
        <div className="mb-4">
          <label htmlFor="dob" className='form-label'>
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            placeholder="Enter your Dob"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.dob ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("dob", {
              required: {
                value: true,
                message: "Date of Birth is required"
              },
              validate: {
                notAdmin: (fieldName) => {
                  return fieldName !== "admin@example.com" || "Enter a different email id";
                }
              }
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.dob?.message}</p>
        </div>


        {/* Password address */}
        <div className="mb-6">
          <label htmlFor="password" className='form-label'>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? 'border-red-500' : 'border-gray-300'
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

        <div className="mb-6">
          <label htmlFor="confirmPassword" className='form-label'>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-Enter your password"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is required"
              }
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignupForm