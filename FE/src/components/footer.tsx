// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-6 text-center shadow-md bg-gray-900 text-white"> {/* Added shadow for consistency */}
      <div className="text-sm">
        <p className="font-semibold">© {currentYear} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2"> {/* Increased space between links */}
          <a 
            href="mailto:your-email@example.com" 
            className="hover:underline transition duration-300 ease-in-out" 
          >
            Email
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline transition duration-300 ease-in-out" 
          >
            GitHub
          </a>
          {/* Add other contact methods or social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
