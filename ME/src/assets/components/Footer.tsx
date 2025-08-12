import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Priyankshu Sinha. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Passionate about building robust backend solutions and integrating AI technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;