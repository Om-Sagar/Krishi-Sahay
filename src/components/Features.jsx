import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const topFeatures = [
    {
      description: ' KrishiSahay Is A Student-Led Initiative From HU Roorkee, Uttarakhand, Focused On Simplifying Farming Through Cutting-Edge AI And Technology. Our AgriSens Platform Empowers Farmers With Crop Recommendations, Disease Detection, And Smart Guidance For Increased Productivity And Sustainable Agriculture. Driven By Passion And Expertise, Our Team Creates User-Friendly Solutions That Help The Farming Community Make Smart Choices And Achieve Better Yields.',
      
    },

   
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Cards */}
        <div className="grid-cols-1 md:grid-cols-3 gap-19 mb-16 ">
          {topFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
