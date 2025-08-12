import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-300 text-lg">Academic foundation in computer science and technology</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <GraduationCap className="text-blue-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Bachelor of Technology in Computer Science and Technology
                </h3>
                <p className="text-blue-300 font-medium mb-2">
                  Meghnad Saha Institute of Technology
                </p>
                <div className="flex items-center space-x-4 text-gray-300 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>Kolkata, India</span>
                  </div>
                  <div className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    CGPA: 7.2
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive study in computer science fundamentals including algorithms, data structures, 
                  database management, software engineering, and emerging technologies. Focused on practical 
                  application of theoretical concepts through hands-on projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;