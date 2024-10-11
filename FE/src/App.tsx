import React, { useState } from 'react'; 
import Navbar from './components/navbar'; 
import './index.css'; 
import Home from './components/home'; 
import About from './components/about'; 
import Projects from './components/projects'; 
import Sidebar from './components/sidebar'; 
import Skills from './components/skills'; 
import Footer from './components/footer'; 

export default function App() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-64 bg-gray-900 text-white">
        <Navbar  />
        <main className="p-4">
          <section id="home">
            <Home />
          </section>
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
      <Footer />
    </div>
  );
}
