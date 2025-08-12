import React from 'react';
import { Phone, Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-blue-400" size={20} />,
      label: 'Phone',
      value: '+91 93307-38467',
      href: 'tel:+919330738467'
    },
    {
      icon: <Mail className="text-green-400" size={20} />,
      label: 'Email',
      value: 'priyankshusinha98@gmail.com',
      href: 'mailto:priyankshusinha98@gmail.com'
    },
    {
      icon: <MapPin className="text-purple-400" size={20} />,
      label: 'Location',
      value: 'Kolkata, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="text-gray-300" size={20} />,
      label: 'GitHub',
      href: 'https://github.com/priyankshusinha98',
      color: 'hover:text-gray-100'
    },
    {
      icon: <Linkedin className="text-blue-400" size={20} />,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-300'
    },
    {
      icon: <ExternalLink className="text-green-400" size={20} />,
      label: 'Portfolio',
      href: '#',
      color: 'hover:text-green-300'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg">Let's discuss opportunities and collaborate on exciting projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    {contact.href !== '#' ? (
                      <a
                        href={contact.href}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-6">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 ${social.color} hover:transform hover:-translate-y-1`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;