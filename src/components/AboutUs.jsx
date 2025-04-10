import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-8" id='about'>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our project! Our website is designed to provide insights into salary trends for specific employee fields from past years to the present. We use advanced data visualization to display salary graphs and employ predictive analytics to forecast future job salaries.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This project is a final year project (FYP) developed by a team of two dedicated members. We are passionate about using data to solve real-world problems and deliver actionable insights.
        </p>
        
        <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-6">Meet the Team</h2>
        
        <div className="flex flex-wrap -mx-4">
          {/* Member 1 */}
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center transition-transform transform hover:scale-105">
              <img
                src="./src/images/raees.jpg" // Replace with member's image path
                alt="Member 1"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Raees Abass</h3>
                <p className="text-gray-600 text-lg">Frontend Developer</p>
              </div>
            </div>
          </div>
          {/* Member 2 */}
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center transition-transform transform hover:scale-105">
              <img
                src="./src/images/saad.jpg" // Replace with member's image path
                alt="Member 2"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Saad Ali</h3>
                <p className="text-gray-600 text-lg">Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
