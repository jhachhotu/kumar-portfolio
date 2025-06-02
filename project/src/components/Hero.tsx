import React from 'react';
import { Github as GitHub, Linkedin, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Chhotu Jha</span> 👋
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Software Engineer | Full-Stack Developer | Problem Solver
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I build secure, scalable web applications using Django, React.js, Python, and modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="https://drive.google.com/uc?export=download&id=1qKoeFeL2gVsT-L26ajnGejhDoGZxa5i5" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all hover:bg-blue-700 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-500 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </div>
            
            <div className="flex items-center mt-8 gap-4">
              <a 
                href="https://github.com/jhachhotu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kumarchhotu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:chhotusimaria@gmail.com" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 md:mt-0 md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl overflow-hidden">
                {/* Profile Image */}
                <img 
                  src="/profile.jpg" 
                  alt="Chhotu Jha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg font-medium text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">Full-Stack</span> Developer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;