import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 px-4">
      <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-2xl max-w-5xl w-full bg-white">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full relative">
          <img
            src="/images/authLeft.png"
            alt="Coffee beans background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 rounded-l-3xl"></div>
          {/* Optional overlay text */}
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold">Welcome to Café Beans</h2>
            <p className="text-sm opacity-90">Your daily brew, simplified ☕</p>
          </div>
        </div>

        {/* Right Login Section */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-amber-800/90 backdrop-blur-sm p-10">
          <div className="bg-white/90 shadow-lg rounded-2xl p-8 w-full max-w-sm">
            {/* Logo */}
            <div className="flex flex-col items-center mb-6">
              <img src="/logo.png" alt="Cafe Beans Logo" className="w-12 h-12 mb-2" />
              <h2 className="text-xl font-bold text-center">
                Cafe <span className="text-amber-700">Beans</span>
              </h2>
            </div>

            {/* Welcome Text */}
            <h3 className="text-lg font-semibold text-center mb-6 text-gray-700">
              Welcome Back 👋
              <br />
              <span className="text-sm text-gray-500">Please login to your account</span>
            </h3>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jubear@gmail.com"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                  <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                    👁️
                  </span>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  Remember me
                </label>
                <a href="#" className="text-amber-700 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button type="submit" className="btn bg-amber-700 hover:bg-amber-800 text-white w-full">
                Sign In
              </button>

              {/* Divider */}
              <div className="divider text-gray-400">Or</div>

              {/* Google Sign In */}
              <button
                type="button"
                className="btn btn-outline w-full border-amber-700 text-amber-700 hover:bg-amber-50"
              >
                Sign in with Google
              </button>
            </form>

            {/* Sign up link */}
            <p className="text-center text-sm mt-6 text-gray-600">
              Don’t have an account?{" "}
              <a href="/register" className="text-amber-700 font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
