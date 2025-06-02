import React from 'react';
import { experiences, education, certifications } from '../utils/data';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
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
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
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
              🧪 Experience & Education
            </h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.position}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{exp.duration}</p>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-900"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-500"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.duration}</p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  {cert.url && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;