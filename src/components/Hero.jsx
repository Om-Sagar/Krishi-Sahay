import React from 'react';
import plantImage from '../assets/image1.png'; // Uncomment when you add your image

const Hero = () => {
  // For now using a suitable online image, replace with your local image
  // const plantImage = "../assets/image1.png";
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white  dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden flex items-center justify-center transition-colors duration-300">
      {/* Background Plant Image */}
      <div className="absolute inset-0 flex items-center justify-center w-100 h-100">
        <div className="relative"  >
          <img
            src={plantImage}
            // alt="Green plant leaves" 
            className="w-full h-screen object-cover  scale-110 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent  dark:from-gray-900/70 dark:via-transparent dark:to-gray-900/50"></div>
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-44">
        {/* Main Title */}
        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6l font-medium mb-6 leading-tight tracking-widest uppercase">
          <span className="text-black dark:text-white text-shadow-custom">
            YOUR SMART
          </span>
          <span className="text-gray-100 dark:text-gray-300 text-shadow-custom">
           {' '}FARMING
          </span>
          <span className="text-black dark:text-white text-shadow-custom">
            {' '}ASSISTANT
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-roboto text-xl md:text-2xl mb-12 mt-10 tracking-wide capitalize text-shadow-soft">
          <span className="text-black dark:text-white">Smart Crops, Smart</span>
          <span className="text-gray-100 dark:text-gray-300"> Choices with</span>
          <span className="text-black dark:text-white"> KrishiSahay!</span>
        </p>
        
        {/* CTA Button */}
        <button className=" font-poppins inline-flex items-center justify-center mt-20 bg-green-600/60  text-white px-12 py-4 rounded-full text-xl font-normal uppercase tracking-wider hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 animate-glow">
          Experience Now
        </button>
      </div>
      
      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 dark:bg-gray-900/90  py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white -mb-96 ">
              Empowering Farmers With <span className="text-green-600">Smart Technology</span>
            </h2>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Hero;
