import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-400 mb-1">Chhotu Jha</h3>
              <p className="text-gray-400">Software Engineer & Full-Stack Developer</p>
            </div>
            
            <div className="flex gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase">Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> by chhotu Jha
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} – All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-4 text-sm">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <span className="text-gray-600">•</span>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <span className="text-gray-600">•</span>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <span className="text-gray-600">•</span>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;