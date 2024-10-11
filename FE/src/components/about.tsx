import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16 bg-gray-800 p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"> {/* Dark theme and shadow effect */}
      {/* Avatar with DaisyUI for Circular Image */}
      <div className="avatar mb-4">
        <div className="w-32 rounded-full border-4 border-blue-500 overflow-hidden"> {/* Added border to the avatar */}
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Avatar"
            className="object-cover w-full h-full" 
          />
        </div>
      </div>

      {/* Profile Details */}
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold">Your Name</h2>
        <p className="text-sm mt-1">Location: Your City</p>
        <p className="text-sm mt-1">Occupation: Your Occupation</p>
      </div>
    </div>
  );
};

export default About;
