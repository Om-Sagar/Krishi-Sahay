import React from 'react';
import WeatherCard from './WeatherCard';
// import plantImage from '../assets/plant-hero.jpg'; // Uncomment when you add your image

const Sidebar = () => {
  // For now using a suitable online image, replace with your local image
  // const plantImage = "";
  const sidebarCards = [
    {
      city: 'CITY',
      temperature: '27°C',
      condition: 'sun',
      description: 'Smart Irrigation Technology, Automated Drip Systems And Water Management Solutions For Optimized Resource Utilization.',
      buttonText: 'Weather Forecast'
    },
    {
      city: 'CITY',
      temperature: '27°C',
      condition: 'rain',
      description: 'Real-time Environmental Monitoring, Humidity, Temperature, And Soil Condition Tracking For Better Decision Making.',
      buttonText: 'Weather Forecast'
    },
    {
      city: 'CITY',
      temperature: '27°C',
      condition: 'sun',
      description: 'Precision Agriculture Tools, GPS-guided Farming Equipment, And Automated Seeding Solutions For Enhanced Productivity.',
      buttonText: 'Weather Forecast'
    },
    {
      city: 'CITY',
      temperature: '27°C',
      condition: 'sun',
      description: 'Market Price Analysis, Crop Value Predictions, And Financial Planning Tools For Profitable Farming Operations.',
      buttonText: 'Weather Forecast'
    }
  ];

  return (
    <aside className="w-full lg:w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <h2 className="text-white text-2xl font-bold tracking-tight">KrishiSahay</h2>
          </div>
          <nav className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-green-400 text-sm font-medium transition-colors">HOME</a>
            <a href="#" className="text-gray-300 hover:text-green-400 text-sm font-medium transition-colors">SOLUTIONS</a>
            <a href="#" className="text-gray-300 hover:text-green-400 text-sm font-medium transition-colors">CONTACT</a>
          </nav>
        </div>
        
        {/* Hero Section with Plant Image */}
        <div className="mb-8 relative bg-white bg-opacity-5 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          {/* Background Plant Image */}
          <div className="absolute inset-0">
            <img 
              src={plantImage} 
              alt="Green plant leaves" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/70 to-gray-900/90"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6 text-center">
            <div className="mb-4">
              <img 
                src={plantImage} 
                alt="Plant illustration" 
                className="w-16 h-16 mx-auto object-cover rounded-full border-2 border-green-400 mb-4"
              />
            </div>
            <h3 className="text-white text-lg font-bold mb-4 leading-tight tracking-wide">
              <span className="block" style={{ textShadow: '-1px 2px 5px rgba(0, 0, 0, 0.8)' }}>YOUR SMART</span>
              <span className="block text-green-400" style={{ textShadow: '-1px 2px 5px rgba(0, 0, 0, 0.8)' }}>FARMING ASSISTANT</span>
            </h3>
            <p className="text-gray-300 text-sm mb-6" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)' }}>
              Smart Crops, Smart <span className="text-green-400 font-semibold">Choices with KrishiSahay!</span>
            </p>
            <button className="w-full bg-green-600/70 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-green-600/90 transition-all duration-200 shadow-lg border border-green-500/30">
              EXPERIENCE NOW
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8 mt-10 p-6 bg-black bg-opacity-5 backdrop-blur-sm rounded-xl border border-gray-700">
          <h3 className="text-white text-lg font-bold mb-4">
            Empowering Farmers With <span className="text-green-400">Smart Technology</span>
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            KrishiSahay is a Student-Led Initiative From IIIT Roorkee, Uttarakhand, Focused On Simplifying Farming Through Cutting-Edge AI And Technology.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Our  Platform Empowers Farmers With Crop Recommendations, Disease Detection, And Smart Guidance For Increased Productivity.
          </p>
        </div>

        {/* Smart Solutions Cards */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 text-center">
            Smart <span className="text-green-400">Solutions</span>
          </h3>
          <div className="space-y-4">
            {sidebarCards.map((card, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-200">
                <WeatherCard
                  city={card.city}
                  temperature={card.temperature}
                  condition={card.condition}
                  description={card.description}
                  buttonText={card.buttonText}
                  variant="default"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center p-4 bg-white bg-opacity-5 backdrop-blur-sm rounded-xl border border-gray-700">
          <div className="flex items-center justify-center mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <p className="text-gray-400 text-xs font-medium">
              Student-Led Project Team
            </p>
          </div>
          <p className="text-gray-500 text-xs">
            (Students From Haridwar University)
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
