import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { registerUser } from "../redux/registerUser";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(registerUser(name, email, password))
      .then(() => {
        navigate("/"); 
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 px-4">
      <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-2xl max-w-5xl w-full bg-white">
        {/* Left side */}
        <div className="md:w-1/2 relative">
          <img src="/images/authLeft.png" alt="Cafe" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30 rounded-l-3xl"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold">Join Café Beans</h2>
            <p className="text-sm opacity-90">Start your day with better brews ☕</p>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-amber-800/90 p-10">
          <div className="bg-white/90 shadow-lg rounded-2xl p-8 w-full max-w-sm">
            <div className="flex flex-col items-center mb-6">
              <img src="/logo.png" alt="Cafe Beans Logo" className="w-12 h-12 mb-2" />
              <h2 className="text-xl font-bold text-center">
                Cafe <span className="text-amber-700">Beans</span>
              </h2>
            </div>

            <h3 className="text-lg font-semibold text-center mb-6 text-gray-700">
              Create Your Account
            </h3>

            <form onSubmit={handleRegister} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" required />
              <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
              <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
              <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered w-full" required />

              <button type="submit" className="btn bg-amber-700 hover:bg-amber-800 text-white w-full" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              <div className="divider text-gray-400">Or</div>
              <button type="button" className="btn btn-outline w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                Sign up with Google
              </button>
            </form>

            {error && <p className="text-red-600 text-center mt-3">{error}</p>}

            <p className="text-center text-sm mt-6 text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-amber-700 font-medium hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
