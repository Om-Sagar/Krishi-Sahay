// // import React from 'react';
// // import { Sprout, CloudRain, TrendingUp, Shield, Users, Smartphone } from 'lucide-react';const Solutions = () => {  const solutions = [    {      icon: <CloudRain className="w-8 h-8" />,      title: "Weather Monitoring",      description: "Real-time weather updates with advanced forecasting for optimal farming decisions.",      features: ["7-day weather forecast", "Rainfall predictions", "Temperature alerts", "Humidity tracking"]    },    {      icon: <Sprout className="w-8 h-8" />,      title: "Crop Management",      description: "AI-powered crop recommendations and health monitoring systems.\",      features: [\"Crop health analysis\", \"Disease detection\", \"Yield predictions\", \"Harvest optimization\"]    },    {      icon: <TrendingUp className=\"w-8 h-8\" />,      title: \"Smart Analytics\",      description: \"Data-driven insights for maximizing productivity and profits.\",      features: [\"Performance metrics\", \"Cost analysis\", \"Market trends\", \"ROI tracking\"]    },    {      icon: <Shield className=\"w-8 h-8\" />,      title: \"Risk Management\",      description: \"Proactive risk assessment and mitigation strategies.\",      features: [\"Pest alerts\", \"Disease warnings\", \"Weather risks\", \"Insurance guidance\"]    },    {      icon: <Users className=\"w-8 h-8\" />,      title: \"Community Support\",      description: \"Connect with fellow farmers and agricultural experts.\",      features: [\"Expert consultations\", \"Farmer forums\", \"Knowledge sharing\", \"Support network\"]    },    {      icon: <Smartphone className=\"w-8 h-8\" />,      title: \"Mobile Solutions\",      description: \"Access all features on-the-go with our mobile applications.\",      features: [\"Offline access\", \"Push notifications\", \"GPS integration\", \"Camera analysis\"]    }  ];  return (    <div className=\"min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300\">      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">        {/* Header */}        <div className=\"text-center mb-16\">          <h1 className=\"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6\">            Smart Farming <span className=\"text-green-600\">Solutions</span>          </h1>          <p className=\"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto\">            Comprehensive agricultural solutions powered by AI and modern technology to revolutionize farming practices.          </p>        </div>        {/* Solutions Grid */}        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">          {solutions.map((solution, index) => (            <div              key={index}              className=\"bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700\"            >              <div className=\"text-green-600 mb-6\">                {solution.icon}              </div>              <h3 className=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">                {solution.title}              </h3>              <p className=\"text-gray-600 dark:text-gray-300 mb-6\">                {solution.description}              </p>              <ul className=\"space-y-2\">                {solution.features.map((feature, featureIndex) => (                  <li key={featureIndex} className=\"flex items-center text-sm text-gray-500 dark:text-gray-400\">                    <div className=\"w-2 h-2 bg-green-500 rounded-full mr-3\"></div>                    {feature}                  </li>                ))}              </ul>            </div>          ))}        </div>        {/* CTA Section */}        <div className=\"mt-20 text-center\">          <div className=\"bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12\">            <h2 className=\"text-3xl font-bold text-white mb-4\">              Ready to Transform Your Farming?            </h2>            <p className=\"text-green-100 text-lg mb-8 max-w-2xl mx-auto\">              Join thousands of farmers who have already improved their yields and reduced costs with KrishiSahay.            </p>            <button className=\"bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200\">              Get Started Today            </button>          </div>        </div>      </div>    </div>  );};export default Solutions;


import React from 'react';
import { Sprout, CloudRain, TrendingUp, Shield, Users, Smartphone } from 'lucide-react';
const Solutions = () => {
     const solutions = [
      {
       icon: <CloudRain className="w-8 h-8" />,
       title: "Weather Monitoring",
       description: "Real-time weather updates with advanced forecasting for optimal farming decisions.",
       features: ["7-day weather forecast", "Rainfall predictions", "Temperature alerts", "Humidity tracking"]
      },
      {
       icon: <Sprout className="w-8 h-8" />,
       title: "Crop Management",
       description: "AI-powered crop recommendations and health monitoring systems.",
       features: ["Crop health analysis", "Disease detection", "Yield predictions", "Harvest optimization"]
      },
      {
       icon: <TrendingUp className="w-8 h-8" />,
       title: "Smart Analytics",
       description: "Data-driven insights for maximizing productivity and profits.",
       features: ["Performance metrics", "Cost analysis", "Market trends", "ROI tracking"]
      },
      {
       icon: <Shield className="w-8 h-8" />,
       title: "Risk Management",
       description: "Proactive risk assessment and mitigation strategies.",
       features: ["Pest alerts", "Disease warnings", "Weather risks", "Insurance guidance"]
      },
      {
       icon: <Users className="w-8 h-8" />,
       title: "Community Support",
       description: "Connect with fellow farmers and agricultural experts.",
       features: ["Expert consultations", "Farmer forums", "Knowledge sharing", "Support network"]
      },
      {
       icon: <Smartphone className="w-8 h-8" />,
       title: "Mobile Solutions",
       description: "Access all features on-the-go with our mobile applications.",
       features: ["Offline access", "Push notifications", "GPS integration", "Camera analysis"]
      }
     ];
     return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Smart Farming <span className="text-green-600">Solutions</span>
         </h1>
         <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive agricultural solutions powered by AI and modern technology to revolutionize farming practices.
         </p>
        </div>
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {solutions.map((solution, index) => (
          <div
           key={index}
           className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700"
          >
           <div className="text-green-600 mb-6">
            {solution.icon}
           </div>
           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {solution.title}
           </h3>
           <p className="text-gray-600 dark:text-gray-300 mb-6">
            {solution.description}
           </p>
           <ul className="space-y-2">
            {solution.features.map((feature, featureIndex) => (
             <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              {feature}
             </li>
            ))}
           </ul>
          </div>
         ))}
        </div>
        {/* CTA Section */}
        <div className="mt-20 text-center">
         <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
           Ready to Transform Your Farming?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
           Join thousands of farmers who have already improved their yields and reduced costs with KrishiSahay.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
           Get Started Today
          </button>
         </div>
        </div>
       </div>
    </div>
     );
    };
    export default Solutions;