import React from 'react';
import { ExternalLink, Github, Brain, MessageCircle, Mail } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Vision - AI-Powered Learning Summarizer',
      description: 'An intelligent tool that summarizes content from YouTube videos and PDFs using advanced AI models. Features automated question paper creation and interactive learning experiences.',
      icon: <Brain className="text-blue-400" size={24} />,
      technologies: ['Python', 'FastAPI', 'MongoDB', 'Whisper', 'T5 Model', 'LangChain', 'Groq API'],
      features: [
        'Content summarization from YouTube videos using Whisper',
        'PDF processing with fine-tuned T5 model',
        'FastAPI backend with MongoDB integration',
        'Automated question paper generation using LangChain and Groq API'
      ]
    },
    {
      title: 'YAP - Real-Time Chat and Video Call App',
      description: 'A comprehensive communication platform offering low-latency messaging and peer-to-peer video calling capabilities with modern web technologies.',
      icon: <MessageCircle className="text-green-400" size={24} />,
      technologies: ['Node.js', 'Express.js', 'WebRTC', 'Socket.IO', 'JavaScript'],
      features: [
        'Real-time messaging with Socket.IO',
        'Peer-to-peer video communication using WebRTC',
        'Low-latency message delivery',
        'Scalable Node.js backend architecture'
      ]
    },
    {
      title: 'VoltMail - AI Cold Email Generator',
      description: 'An intelligent email assistant that generates personalized cold emails using advanced RAG pipeline and state-of-the-art language models.',
      icon: <Mail className="text-purple-400" size={24} />,
      technologies: ['Streamlit', 'Express.js', 'ChromaDB', 'Cohere', 'Groq LLaMA3', 'RAG Pipeline'],
      features: [
        'RAG pipeline implementation using ChromaDB',
        'Cohere embeddings for semantic search',
        'Groq LLaMA3 for email generation',
        'Streamlit frontend with Express.js backend'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-lg">Showcasing my expertise in backend development and AI integration</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                {project.icon}
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex items-center space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
                  <Github size={16} />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg transition-colors text-sm">
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;