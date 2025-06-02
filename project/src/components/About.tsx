import React from 'react';
import { Code, Database, Layout, Server } from 'lucide-react';
import { aboutMe } from '../utils/data';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              👨‍💻 About Me
            </h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {aboutMe}
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-500 shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h3>
                  <p className="text-gray-700 dark:text-gray-300">Building responsive and intuitive user interfaces with React.js and modern CSS frameworks.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-indigo-600 dark:border-indigo-500 shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                  <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h3>
                  <p className="text-gray-700 dark:text-gray-300">Creating robust server-side applications with Django and REST APIs.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-600 dark:border-purple-500 shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Database Management</h3>
                  <p className="text-gray-700 dark:text-gray-300">Designing and optimizing databases with MySQL, PostgreSQL, and SQLite.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-teal-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-teal-600 dark:border-teal-500 shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full">
                  <Layout className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full-Stack Solutions</h3>
                  <p className="text-gray-700 dark:text-gray-300">End-to-end application development from concept to deployment.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;