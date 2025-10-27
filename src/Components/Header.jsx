import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router"; 
import { AuthContext } from "./Context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navLinks = (
    <ul className="flex gap-4 text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/menu">Our Menu</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </ul>
  );

  return (
    <div>
      <div className='navbar bg-[url("https://i.ibb.co/jvB0xmwX/Rectangle-1.png")] bg-cover bg-center'>
        <div className="navbar-start ml-6 md:ml-32">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <img className="w-12" src="/images/more/logo1.png" alt="Espresso Logo" />
            <h1 className="text-white text-xl font-semibold">Espresso</h1>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">{navLinks}</div>

        <div className="navbar-end mr-6 md:mr-32">
          {user ? (
            // ✅ If user is logged in: show avatar with dropdown
            <div className="dropdown dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn btn-ghost btn-circle avatar ring-2 ring-amber-500 ring-offset-2"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={user?.displayName || "User avatar"}
                    src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-64 p-2 shadow-lg border border-gray-200"
              >
                {/* User Info */}
                <li className="menu-title px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img 
                          src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} 
                          alt={user?.displayName}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-800">
                        {user?.displayName || "User"}
                      </span>
                      <span className="text-xs text-gray-500 truncate">
                        {user?.email}
                      </span>
                    </div>
                  </div>
                </li>
                
                <li className="my-1">
                  <div className="divider my-0"></div>
                </li>

                {/* Dashboard Link */}
                <li>
                  <NavLink 
                    to="/dashboard" 
                    className="flex items-center gap-2 px-4 py-2 hover:bg-amber-50 rounded-lg"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
                      />
                    </svg>
                    <span>Dashboard</span>
                  </NavLink>
                </li>

                {/* Profile Link (Optional) */}
                <li>
                  <NavLink 
                    to="/profile" 
                    className="flex items-center gap-2 px-4 py-2 hover:bg-amber-50 rounded-lg"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                      />
                    </svg>
                    <span>My Profile</span>
                  </NavLink>
                </li>

                <li className="my-1">
                  <div className="divider my-0"></div>
                </li>

                {/* Logout Button */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                      />
                    </svg>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            // ❌ If user is NOT logged in: show Login button
            <button
              onClick={() => navigate("/login")}
              className="btn btn-outline text-white border-white hover:bg-white hover:text-black"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;