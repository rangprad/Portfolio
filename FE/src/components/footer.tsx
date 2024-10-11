// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const email = "your-email@example.com";
  const githubUrl = "https://github.com/yourusername";

  return (
    <footer className="p-6 text-center shadow-md bg-gray-900 text-white">
      <div className="text-sm">
        <p className="font-semibold">© {currentYear} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a 
            href={`mailto:${email}`} 
            className="hover:underline transition duration-300 ease-in-out" 
          >
            Email
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline transition duration-300 ease-in-out" 
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
