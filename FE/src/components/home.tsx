import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="flex flex-col md:flex-row max-w-3xl text-center p-2"> {/* Adjusted width and layout */}
        <div className="flex-1"> {/* Added flex-1 to allow text to grow */}
          <h1 className="text-8xl font-bold">Hi. I'm Rangga.</h1>
          <h2 className="text-8xl font-bold mt-4">A Programmer.</h2>
          <p className="text-xl mt-12 text-gray-400">
            I'm passionate about crafting code that transforms ideas into impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
