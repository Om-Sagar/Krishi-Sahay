import React from 'react';

const WeatherCard = ({ city, temperature, condition, description, buttonText, variant = 'default' }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'rain':
        return (
          <div className="relative">
            <div className="text-2xl">☁️</div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-blue-300">💧</div>
          </div>
        );
      case 'sun':
        return '☀️';
      case 'cloud':
        return '⛅';
      case 'planning':
        return '🌱';
      default:
        return '🌤️';
    }
  };

  const getCardStyle = () => {
    if (variant === 'crop') {
      return 'bg-gradient-to-br from-emerald-500 to-green-600';
    }
    return 'bg-gradient-to-br from-green-500 to-green-700';
  };

  return (
    <div className={`${getCardStyle()} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-xs font-semibold opacity-80 mb-1">{city}</p>
          <div className="flex items-center">
            <div className="mr-3">{getWeatherIcon(condition)}</div>
            <div>
              <span className="text-3xl font-bold">{temperature}</span>
              <p className="text-xs opacity-80 mt-1"></p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm opacity-90 mb-6 leading-relaxed line-clamp-4">
        {description}
      </p>
      <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-opacity-30 transition-all duration-200 border border-white border-opacity-30">
        {buttonText || 'Weather Forecast'}
      </button>
    </div>
  );
};

export default WeatherCard;
