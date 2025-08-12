import React from 'react';
import { Code, Database, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Backend Developer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Specialized in building robust REST APIs and integrating AI-based tools using Python, FastAPI, and Node.js
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate backend developer with expertise in building scalable REST APIs and integrating cutting-edge AI technologies. 
              My focus is on creating clean, deployment-ready code that solves real-world problems.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With proficiency in technologies like MongoDB, WebRTC, and LangChain, I bridge the gap between traditional backend 
              development and modern AI applications. I believe in writing maintainable code that stands the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm">Python</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm">FastAPI</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm">MongoDB</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-gray-300">
                Focus on writing maintainable, scalable, and deployment-ready code following best practices.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <Database className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Database Design</h3>
              <p className="text-gray-300">
                Experienced in designing efficient database schemas and optimizing queries for performance.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <Cpu className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-gray-300">
                Specialized in integrating AI tools and building intelligent applications using modern frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;