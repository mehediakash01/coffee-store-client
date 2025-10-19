import React from "react";
import { NavLink, useNavigate } from "react-router"; 

const Header = () => {
  const navigate = useNavigate();

 
  const user = null; 

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
            // ✅ If user is logged in: show avatar
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={user.photoURL || "https://i.pinimg.com/originals/1f/bd/e8/1fbde8d9c2d5061dbaefb8afe0e97d05.jpg"}
                />
              </div>
            </div>
          ) : (
            
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
