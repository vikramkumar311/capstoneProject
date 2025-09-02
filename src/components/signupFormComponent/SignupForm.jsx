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
      phoneNumber: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
    },

  });

  const { register, control, handleSubmit, formState, getValues } = form;
  const { errors } = formState;
  const { onSubmitSignup } = useContext(userContext)

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit((data) => onSubmitSignup(data))}
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
            // validation
            {...register("firstName", {
              required: {
                value: true,
                message: "first name is required"
              },
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters"
              },
              maxLength: {
                value: 30,
                message: "First name is too long"
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only alphabets are allowed"
              }
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
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters"
              },
              maxLength: {
                value: 30,
                message: "First name is too long"
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only alphabets are allowed"
              }
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.lastName?.message}</p>
        </div>

        {/* mobile phone */}
        <div className='mb-4'>
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
              maxLength: {
                value: 100,
                message: "Length of Email address exceeded"
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
                notFutureDate: (value) => {
                  if (!value) return true;
                  const selectedDate = new Date(value);
                  const today = new Date();
                  // Remove time part for accurate comparison
                  selectedDate.setHours(0,0,0,0);
                  today.setHours(0,0,0,0);
                  return selectedDate <= today || "Date of Birth cannot be in the future";
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
              },
              minLength: {
                value: 8,
                message: "Password must be 8-20 letter long"
              },
              maxLength: {
                value: 20,
                message: "Password must be 8-20 letter long"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
                message: "Password must include uppercase, lowercase, number, and special character"
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
              },
              validate: value =>
                value === getValues("password") || "Password does not match"
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