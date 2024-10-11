import React from 'react';
import profileImage from '../assets/profile.jpg'; // Adjust the path as necessary

const About: React.FC = () => (
  <div className="p-4">
    <div className="flex items-center justify-center mb-6">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
    </div>
    <div className="flex items-center justify-center p-8">
      <div className="w-1/2 pr-4">
        <img
          src={profileImage} // Use the imported image
          alt="About Me"
          className="rounded-lg shadow-lg w-[300px] h-auto" // Set width to 300px and height to auto
        />
      </div>
      <div className="w-1/2">
        <p className="text-lg mt-0">
          I'm a high school student with a passion for unraveling the mysteries of code. By day, I navigate the halls of my school, but by night, I'm a digital architect, building worlds one line at a time. My journey into programming began with a simple "Hello, World!" and has since evolved into a quest to create apps that make a difference. I believe that technology has the power to shape our future, and I'm excited to be part of that transformation. My goal? To develop innovative solutions that tackle real-world problems, all while balancing textbooks and code editors. Join me as I embark on this exhilarating adventure of growth, creativity, and endless possibilities in the vast universe of programming!
        </p>
      </div>
    </div>
  </div>
);

export default About;
