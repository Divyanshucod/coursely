// components/Auth.tsx
import { useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        {/* Switch Between Login and SignUp */}
        {isLogin ? (
          <Login />
        ) : (
          <SignIn />
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Don't have an account? Create one" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
