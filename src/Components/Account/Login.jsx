import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#22223b] via-[#1a1a2e] to-[#0f3460]">
      <div className="group relative w-full max-w-2xl flex flex-col items-center">
        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10 animate-glow group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-opacity duration-300"
          style={{
            background:
              "conic-gradient(rgb(0, 240, 255), rgb(124, 58, 237), rgb(0, 240, 255) 100%)",
            filter: "blur(6px)",
          }}
        ></div>

        {/* Card */}
        <div className="bg-[#181a20] backdrop-blur-md py-8 px-20 rounded-2xl shadow-2xl w-full flex flex-col items-center border border-white/10 z-20">
          <h1 className="text-3xl font-extrabold mb-2 text-white tracking-tight drop-shadow-lg">
            Sign In
          </h1>
          <p className="text-gray-300 text-center mb-6 text-sm">
            Sign in to your account to access your profile, history, and any
            private pages you&apos;ve been granted access to.
          </p>

          {/* Form */}
          <form
            className="w-full flex flex-col space-y-4 mt-2"
            autoComplete="off" // disable autofill on the form
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
              className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="new-password" // important: avoid "password" name
              placeholder="Password"
              required
              autoComplete="new-password"
              className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-xl tracking-wide"
            >
              Sign In
            </button>

            <div className="w-full flex justify-center mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 w-full flex flex-col items-center">
            <span className="text-gray-500 mb-2">
              Don&apos;t have an account?
            </span>
            <Link
              to="/create-account"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg text-center font-semibold hover:scale-105 transition-all duration-200 shadow"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
