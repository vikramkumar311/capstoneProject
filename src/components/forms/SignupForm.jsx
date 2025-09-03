import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { userContext } from '../../context/UserProvider';
import './SignupForm.css'
import { useNavigate } from 'react-router-dom';
import { onSubmitSignup } from '../../api/signupAuth';

import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../validations/signupSchema';

const SignupForm = () => {

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userId: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
    },

  });

  const { register, control, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const navigate = useNavigate();
  const { suggestions, setSuggestions } = useContext(userContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit((data) => onSubmitSignup(data, navigate, setSuggestions))}
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

            {...register("firstName")}
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
            {...register("lastName")}
          />
          <p className="text-red-500 text-sm mt-1">{errors.lastName?.message}</p>
        </div>



        {/* userId */}
        <div className="mb-4">
          <label htmlFor="userId" className='form-label'>
            User Id
          </label>
          <input
            type="text"
            id="userId"
            placeholder="Enter your last name"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("userId")}
          />

          {/* Validatio Error */}
          <p className="text-red-500 text-sm mt-1">{errors.userId?.message}</p>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="mt-2">
              <p className="text-gray-600 text-sm">Try one of these:</p>
              <ul className="list-disc list-inside text-blue-600">
                {suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* mobile phone */}
        {/* <div className='mb-4'>
          <label htmlFor="phoneNumber" className='form-label'>
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            placeholder='Enter your number'
            inputMode='numeric' // brings up numeric keypad on mobile
            pattern='[0-9]*' // restrict input to digit
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("phoneNumber", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Phone number is required"
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits"
              },
              
            })}
          />

          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber?.message}</p>
        </div> */}


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
            {...register("email")}
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>


        {/* Dob address */}
        <div className="mb-4">
          <label htmlFor="dob" className='form-label'>
            Date of Birth
          </label>
          <input
            type="text"
            id="dob"
            placeholder="DD-MM-YYYY"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.dob ? 'border-red-500' : 'border-gray-300'
              }`}
            {...register("dob")}
            pattern="\d{2}-\d{2}-\d{4}"
            maxLength={10}
            inputMode="numeric"
          />
          <p className="text-red-500 text-sm mt-1">{errors.dob?.message}</p>
        </div>
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
            {...register("password")}
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
            {...register("confirmPassword")}
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


