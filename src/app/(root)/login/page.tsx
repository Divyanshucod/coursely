"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Login({}: Props) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [withEmail, setWithEmail] = React.useState<boolean>(false);
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
            Log in to continue your learning journey
          </h2>

          {/* Login Form */}
          <form>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {withEmail ? null : (
              <div className="mb-6">
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <Button
              type="submit"
              variant="default"
              className="w-full bg-sky-600"
            >
              Sign In
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

            <Button
              variant="default"
              className="w-full bg-slate-600 transparent flex gap-4 p-2"
            >
              <span>Sign in with gmail</span>
              <Image
                src="/gmail.png"
                alt="gmail_image"
                height="40"
                width="40"
              />
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
    </div>
  );
}

export default Login;
