import React, { useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Move scroll handler to useCallback to prevent recreation on each render
  const handleSmoothScroll = useCallback((e: Event) => {
    e.preventDefault();
    
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    
    if (!href) return;
    
    const targetElement = document.querySelector(href);
    if (!targetElement) return;
    
    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    // Update document title with template literals for better readability
    document.title = `Chhotu jha | Software Engineer & Full-Stack Developer`;
    
    // Add smooth scroll event listeners
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners on component unmount
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [handleSmoothScroll]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;