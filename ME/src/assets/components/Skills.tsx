import React from 'react';
import { Code2, Database, Wrench, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="text-blue-400" size={24} />,
      skills: ['Python', 'Java', 'JavaScript']
    },
    {
      title: 'ML Technologies/Frameworks',
      icon: <Database className="text-green-400" size={24} />,
      skills: ['LangChain', 'Whisper', 'T5', 'Groq']
    },
    {
      title: 'Backend Frameworks',
      icon: <Globe className="text-purple-400" size={24} />,
      skills: ['FastAPI', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <Database className="text-orange-400" size={24} />,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="text-red-400" size={24} />,
      skills: ['Git', 'GitHub', 'Render', 'Vercel', 'Railway']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="text-cyan-400" size={24} />,
      skills: ['Socket.IO', 'JWT', 'Multer', 'Streamlit']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-300 text-lg">Comprehensive expertise across modern technologies and frameworks</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/80 transition-colors"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl">
              Passionate about staying updated with the latest technologies and best practices. 
              Currently exploring advanced AI/ML frameworks and cloud-native architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;