import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./Context/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import SocialLogin from "./socicalLogin/SocialLogin";

const Login = () => {
  const { loginUser,  loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      form.reset();
      
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);

    } catch (error) {
      console.error("Login error:", error);
    }
  };



  return (
    <>
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 2000,
            iconTheme: {
              primary: '#d97706',
              secondary: '#fff',
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-orange-100 px-4 py-8">
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-2xl shadow-2xl max-w-4xl w-full bg-white">
          {/* Left side - Image */}
          <div className="lg:w-5/12 relative hidden lg:block">
            <img
              src="/images/authLeft.png"
              alt="Coffee beans background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-6 right-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-sm opacity-90">
                Your favorite brew awaits ☕
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-7/12 w-full flex items-center justify-center p-8 lg:p-12 bg-white">
            <div className="w-full max-w-md">
              {/* Logo */}
              <div className="flex flex-col items-center mb-8">
                <div className="bg-amber-100 p-3 rounded-full mb-3">
                  <img
                    src="/logo.png"
                    alt="Cafe Beans Logo"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Cafe <span className="text-amber-700">Beans</span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">Welcome back!</p>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                    <input 
                      type="checkbox" 
                      className="checkbox checkbox-sm border-gray-300"
                    />
                    Remember me
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-amber-700 hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In Button */}
                <button 
                  type="submit" 
                  className="btn bg-amber-700 hover:bg-amber-800 text-white w-full border-none mt-6"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="loading loading-spinner loading-sm"></span>
                      Signing In...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>

                {/* Divider */}
                <div className="divider text-gray-400 text-xs">OR</div>

                {/* Google Sign In */}
                <SocialLogin></SocialLogin>
              </form>

              {/* Sign up link */}
              <p className="text-center text-sm mt-6 text-gray-600">
                Don't have an account?{" "}
                <Link 
                  to="/register" 
                  className="text-amber-700 font-semibold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;