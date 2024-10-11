import React from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

const Sidebar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('nav')?.clientHeight || 0;

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-64 bg-base-100 fixed left-0 top-1/2 bg-gray-900 text-white transform -translate-y-1/2 p-4">
      <ul className="menu flex flex-col items-center">
        {navItems.map(({ id, label }) => (
          <li key={id} className="py-2">
            <span
              className="cursor-pointer text-white hover:text-gray-200 transition-transform transform hover:scale-105"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
