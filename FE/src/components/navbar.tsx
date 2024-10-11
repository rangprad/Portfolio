import React from 'react';

interface NavbarProps {
  onManageClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onManageClick }) => {
  return (
    <nav className="navbar bg-base-100 fixed top-0 left-0 w-full z-10 bg-gray-900 text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl ml-16">daisyUI</a>
      </div>

      <div className="navbar-end">
        {/* Text button style */}
        <button
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out focus:outline-none mr-6
          "
          onClick={onManageClick}
        > 
          Manage
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
