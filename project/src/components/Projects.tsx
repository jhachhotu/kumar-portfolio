import React from 'react';
import { projects } from '../utils/data';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="projects" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-12"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              💼 Projects
            </h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full transition-all duration-300 hover:w-32"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 max-w-sm mx-auto"
              >
                {/* Project Header */}
                <motion.div 
                  className={`h-40 bg-gradient-to-r ${getGradientColor(project.id)} flex items-center justify-center p-4 relative overflow-hidden`}
                  whileHover={{
                    backgroundPosition: ['0%', '100%'],
                    transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <h3 className="text-xl font-bold text-white text-center z-10 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300" />
                </motion.div>
                
                {/* Project Details */}
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 3,
                            transition: { duration: 0.2 }
                          }}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs font-medium cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-600 hover:shadow-lg"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-blue-600 dark:bg-blue-700 text-white rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to get different gradient colors for different projects
const getGradientColor = (id: string): string => {
  switch (id) {
    case 'doctor-appointment':
      return 'from-blue-600 to-indigo-700';
    case 'student-portal':
      return 'from-purple-600 to-pink-600';
    case 'crop-disease':
      return 'from-green-600 to-teal-600';
    case 'ecommerce':
      return 'from-orange-500 to-red-600';
    default:
      return 'from-blue-600 to-indigo-700';
  }
};

export default Projects;