// navbar.tsx
import React from 'react';

interface NavbarProps {
  onManageClick?: () => void; // Make this prop optional
}

const Navbar: React.FC<NavbarProps> = ({ onManageClick }) => (
  <nav className="navbar bg-base-100 fixed top-0 left-0 w-full z-10 bg-gray-900 text-white">
    <div className="navbar-start">
      <a className="btn btn-ghost text-xl ml-16 text-FFBA00">ID/Bandung</a>
    </div>

    <div className="navbar-end">
      <button
        className="text-FFBA00 hover:text-BB8A52 transition duration-300 ease-in-out focus:outline-none mr-6"
        onClick={onManageClick}
      >
        Manage
      </button>
    </div>
  </nav>
);

export default Navbar;
