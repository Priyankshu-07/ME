import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Backend Intern',
      company: 'Pearl Thoughts',
      period: 'Recent',
      type: 'Internship',
      responsibilities: [
        'Built comprehensive email service with advanced retry logic and rate limiting capabilities',
        'Implemented circuit breaker pattern for enhanced fault tolerance and system reliability',
        'Developed robust error handling mechanisms for production-grade applications',
        'Optimized email delivery performance and monitoring systems'
      ],
      technologies: ['Python', 'FastAPI', 'Email Services', 'Circuit Breaker', 'Rate Limiting']
    },
    {
      title: 'Data Visualization Intern',
      company: 'Lisica Tech',
      period: 'Previous',
      type: 'Internship',
      responsibilities: [
        'Designed and built interactive dashboards using Matplotlib and Seaborn',
        'Automated visual analytics workflows for the UCL dataset processing',
        'Utilized KNIME for advanced data processing and visualization pipelines',
        'Created comprehensive data insights and reporting mechanisms'
      ],
      technologies: ['Python', 'Matplotlib', 'Seaborn', 'KNIME', 'Data Analytics', 'Dashboard Development']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-300 text-lg">Building robust solutions and gaining valuable industry insights</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-600 hidden md:block"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-800 hidden md:block"></div>

                <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600/20 p-3 rounded-lg">
                        <Briefcase className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-blue-300 font-medium mb-2">
                          {experience.company}
                        </p>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{experience.period}</span>
                          </div>
                          <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-2">•</span>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;