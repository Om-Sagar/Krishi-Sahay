import React from 'react';
import WeatherCard from './WeatherCard';

const SmartSolutions = () => {
  const topRow = [
    {
      city: ' ',
      temperature: ' Future Weather Forecasting',
      condition: 'rain',
      description: 'Real-time weather forecasting provides farmers with precise temperature, humidity, and alerts to plan farming activities effectively and optimize crop yield',
      buttonText: 'Weather Forecast'
    },
    {
      city: '',
      temperature: 'Disease Identification',
      condition: 'rain',
      description: 'Plant disease identification uses visual analysis—often enhanced with magnification—to detect symptoms like spots, discoloration, or leaf deformation, enabling early diagnosis and treatment.',
      buttonText: 'Weather Forecast'
    },
    {
      city: '',
      temperature: 'Fertilizer Recommendations',
      condition: 'rain',
      description: 'Fertilizers recommendations guide optimal nutient application, ensuring healthy plant growth and improved crop yields',
      buttonText: 'Weather Forecast'
    }
  ];

  const bottomRow = [
    {
      city: '',
      temperature: 'Cropping Recommendations',
      condition: 'rain',
      description: 'Crop recommendations helps farmers choose the most suitable crops for their soill and climate. They are based on scientific analysis of soil nutients, pH, and texture',
      buttonText: 'Weather Forecast'
    },
    {
      city: '',
      temperature: 'Smart Farming Guidance',
      condition: 'rain',
      description: 'Smart Farming guidance combined technology and expertise to optimize crop health, boost yields, and ensure sustainability.',
      buttonText: 'Explore Now'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Smart <span className="text-green-600">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topRow.map((solution, index) => (
            <WeatherCard
              key={index}
              city={solution.city}
              temperature={solution.temperature}
              condition={solution.condition}
              description={solution.description}
              buttonText={solution.buttonText}
              variant="default"
            />
          ))}
        </div>
        
        {/* Bottom row - 2 cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {bottomRow.map((solution, index) => (
              <WeatherCard
                key={index + 3}
                city={solution.city}
                temperature={solution.temperature}
                condition={solution.condition}
                description={solution.description}
                buttonText={solution.buttonText}
                variant="default"
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">
              A Student-Led Project Team (Students From Haridwar University)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolutions;
