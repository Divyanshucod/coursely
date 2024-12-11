// components/Login.tsx
"use client"
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>

        <div className="my-4 text-center text-gray-600">or</div>

        {/* Social Sign-In Buttons */}
        <button
          onClick={() => {}}
          className="w-full py-3 mb-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Sign in with Google
        </button>

        <button
          onClick={() => {}}
          className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          Sign in with GitHub
        </button>

        {/* Link to Sign Up */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/auth/signup" className="text-blue-500 hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
