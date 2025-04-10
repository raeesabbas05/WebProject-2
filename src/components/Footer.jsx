import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.8 10.8 0 01-3.1.9 4.9 4.9 0 002.1-2.7 9.8 9.8 0 01-3.1 1.2 4.8 4.8 0 00-8.2 4.4 13.6 13.6 0 01-9.9-5 4.8 4.8 0 001.5 6.4 4.9 4.9 0 01-2.2-.6v.1a4.8 4.8 0 003.9 4.7 4.7 4.7 0 01-2.2.1 4.8 4.8 0 004.5 3.3A9.6 9.6 0 010 19a13.6 13.6 0 007.4 2.2c8.9 0 13.8-7.3 13.8-13.7v-.6a9.8 9.8 0 002.4-2.5z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 2h-3a6 6 0 00-6 6v3H8a2 2 0 00-2 2v3a2 2 0 002 2h3v7h4v-7h3l1-3h-4V8a1 1 0 011-1h3V2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM8 10v6m2-6v6m4-6v6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p>If you have any questions or feedback, feel free to reach out to us:</p>
            <p className="mt-2 text-blue-600 hover:underline">
              <a href="mailto:support@example.com">support@example.com</a>
            </p>
            <p className="mt-2">Phone: +00000000000</p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2024 JobInsight Dashboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
