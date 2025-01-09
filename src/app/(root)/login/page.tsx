"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";

type Props = {};

const validate = (values: { username: string; email: string; password: string }) => {
  const errors = {
    email: "",
    username: "",
    password: "",
  };
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 3) {
    errors.username = "Must be 3 characters";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters/digit at least";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function Login({}: Props) {
  const handleSubmit = (values: any) => {
    console.log(`Submitted Values: ${values}`);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Submitting...");
      handleSubmit(values);
    },
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-10 md:p-10 bg-gray-50">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src="/login-signin-support-image.webp"
          alt="login-support-image"
          height="500"
          width="500"
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-extrabold text-center mb-6">
          Log in to continue your learning journey
        </h2>

        {/* Login Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.email ? (
              <span className="text-red-600 text-sm">{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.password ? (
              <div className="text-red-600 text-sm mb-4">{formik.errors.password}</div>
            ) : null}
          </div>
          <Button type="submit" variant="default" className="w-full bg-sky-600">
            Sign In
          </Button>
        </form>

        <div className="my-4 text-center text-gray-600">or</div>

        <div className="w-full flex flex-col gap-4">
          <Button
            variant="default"
            className="w-full bg-gray-500 flex items-center justify-center gap-4 p-2"
          >
            <span>Sign in with Google</span>
            <Image
              src="/google-remove.png"
              alt="google_image"
              height="30"
              width="30"
            />
          </Button>

          <Button
            variant="default"
            className="w-full bg-slate-600 flex items-center justify-center gap-4 p-2"
          >
            <span>Sign in with Gmail</span>
            <Image src="/gmail.png" alt="gmail_image" height="30" width="30" />
          </Button>
        </div>

        {/* Link to Sign Up */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
