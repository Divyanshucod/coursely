'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';

type Props = {}


const validate = (values: { username: string , email: string  ,password: string; }) => {
  const errors = {
    email:'',
    username:'',
    password:''
  };
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 3) {
    errors.username = 'Must be 3 characters';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters/digit at least';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

function SignUp({}: Props) {
 

  const handleSubmit = (values:any)=>{
       console.log(`Submitted Values: ${values}`);
       
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      console.log('Submitting...');
      handleSubmit(values);
    },
  });
  return (
    <div className="w-full h-full flex justify-between p-10 ">
      <div className="w-[50%] h-[60%]">
        <Image
          src="/login-signin-support-image.webp"
          alt="login-support-image"
          height="500"
          width="500"
          className="h-full w-full"
        />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 w-[50%]">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-extrabold text-center mb-6">
          Sign up and start learning
          </h2>

        {/* Sign Up Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-1">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username*
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {formik.errors.username ? <span className='text-red-600 text-sm'>{formik.errors.username}</span> : null}

          <div className="mb-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {formik.errors.email ? <span className='text-red-600 text-sm'>{formik.errors.email}</span> : null}
           
          <div className="mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {formik.errors.password ? <div className='text-red-600 text-sm mb-4'>{formik.errors.password}</div> : null}
          
          <Button
              type="submit"
              variant="default"
              className="w-full bg-sky-600"
            >
              Create Account
            </Button>
        </form>

        <div className="my-4 text-center text-gray-600">or</div>
       
        <div className="w-full flex flex-col gap-5">
            <Button
              variant="default"
              className="w-full bg-gray-500 transparent flex gap-4 p-2"
            >
              <span>Sign in with google</span>
              <Image
                src="/google-remove.png"
                alt="google_image"
                height="50"
                width="50"
              />
            </Button>
          </div>
        {/* Link to Login */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default SignUp