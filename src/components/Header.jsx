import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-200 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-8 w-8 mr-2 rounded-full"
              src="./src/images/logo.png" // Replace with your logo's path
              alt="Logo"
            />
            <span className="font-bold text-lg text-gray-800">JobInsight Dashboard</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/signin" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>
            <Link to="/signout" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Sign Out</Link>
            <a href="#about" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
          </nav>
          <div className="md:hidden">
            <button onClick={handleMenuToggle} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${menuOpen ? "block" : "hidden"} md:hidden bg-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/signin" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Sign In</Link>
          <Link to="/signout" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Sign Out</Link>
          <a href="#about" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">About Us</a>
          <a href="#contact" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
        </div>
      </div>
    </header>
  );
}
