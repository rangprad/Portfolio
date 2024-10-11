import React, { useState } from 'react'; 
import Navbar from './components/navbar'; 
import './index.css'; 

import About from './components/about'; 
import Projects from './components/projects'; 
import Sidebar from './components/sidebar'; 
import Skills from './components/skills';
import Login from './components/login'; 
import Footer from './components/footer'; 

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control the login modal

  return (
    <div className="flex flex-col min-h-screen"> {/* Ensures full height */}
      <Sidebar />
      <div className="flex-1 pl-64 bg-gray-900 text-white"> {/* Added background color and text color */}
        <Navbar onManageClick={() => setIsLoginOpen(true)} /> {/* Pass the function to open the modal */}
        <main className="p-4">
          <section id="about">
            <About />
          </section>
          <section id="projects"> 
            <Projects />
          </section>
          <section id="skills"> 
            <Skills />
          </section>
        </main>
      </div>
      <Footer /> {/* Add the Footer here */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> {/* Close the modal when clicking outside */}
    </div>
  );
}
