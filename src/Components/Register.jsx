import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "./Context/AuthContext";

const Register = () => {
  const { createUser, updateUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photoURL.value || "https://i.ibb.co/4pDNDk1/avatar.png";

    // Validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    // Show loading toast
    const toastId = toast.loading("Creating your account...");

    try {
      // Create user
      const result = await createUser(email, password);

      // Update profile with name and photo
      await updateUser({
        displayName: name,
        photoURL: photoURL,
      });

      // Save user to backend database
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: result.user.uid,
            name: name,
            email: email,
            photoURL: photoURL,
            registerAt: new Date().toISOString(),
            role: "customer",
          }),
        });

        if (!response.ok) {
          console.warn("Backend save failed, but Firebase account created");
        }
      } catch (dbError) {
        console.warn("Database error:", dbError);
        // Continue anyway - Firebase account was created
      }

      // Dismiss loading and show success
      toast.dismiss(toastId);
      toast.success("Account created successfully! Welcome aboard! ☕", {
        duration: 2000,
      });

      form.reset();

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(toastId);

      // Handle Firebase errors
      let errorMessage = "Registration failed. Please try again.";

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered. Please sign in instead.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak. Use at least 6 characters.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Network error. Please check your connection.";
      }

      toast.error(errorMessage, {
        duration: 3000,
      });
      console.error("Registration error:", error);
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
              alt="Cafe"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-6 right-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Join Café Beans</h2>
              <p className="text-sm opacity-90">
                Brew connections, savor moments ☕
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
                <p className="text-gray-500 text-sm mt-1">Create your account</p>
              </div>

              {/* Form */}
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div>
                  <input
                    name="photoURL"
                    type="url"
                    placeholder="Photo URL (optional)"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password (min. 6 characters)"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                    minLength={6}
                  />
                </div>

                <div>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn bg-amber-700 hover:bg-amber-800 text-white w-full border-none mt-6"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="loading loading-spinner loading-sm"></span>
                      Creating Account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="divider text-gray-400 text-xs">OR</div>

                <button
                  type="button"
                  className="btn btn-outline w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-amber-700 hover:text-amber-700"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </form>

              {/* Footer */}
              <p className="text-center text-sm mt-6 text-gray-600">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-amber-700 font-semibold hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;