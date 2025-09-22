import React from 'react';

const FeatureCard = ({ icon, title, description, buttonText, variant = '', city = '', temperature = '', condition = '' }) => {
  const getCardStyles = () => {
    switch (variant) {
      case 'crop':
        return 'bg-gradient-to-br from-emerald-500 to-green-600';
      case 'planning':
        return 'bg-gradient-to-br from-green-600 to-emerald-700';
      case 'weather':
        return 'bg-gradient-to-br from-green-500 to-green-700';
      default:
        return 'bg-gradient-to-br from-green-500 to-green-700';
    }
  };

  const getWeatherIcon = () => {

    return (
      <div>
      </div>
    );
  };

  const getTitle = () => {
    if (variant === 'crop') return 'CROP\nPLANNING';
    if (variant === 'planning') return 'PLANNING';
    return city;
  };

  return (
    <div className={`${getCardStyles()} p-6 -mt-11 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-xs font-semibold opacity-80 mb-1">{getTitle()}</p>
          <div className="flex items-center">
            <div className="mr-3">{getWeatherIcon()}</div>
            {(variant === 'weather' || variant === 'default') && (
              <div>
                <span className="text-3xl font-bold">{temperature}</span>
                <p className="text-xs opacity-80 mt-1">RAIN</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-xl opacity-90 mb-6 leading-relaxed line-clamp-4">
        {description}
      </p>
      
    </div>
  );
};

export default FeatureCard;
