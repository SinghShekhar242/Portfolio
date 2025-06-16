import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import { projects, initialFeaturedProjectId, getProjectById } from './data/pro';

function App() {
  const [showHeroAnimation, setShowHeroAnimation] = useState(true);
  const [featuredProject, setFeaturedProject] = useState(getProjectById(initialFeaturedProjectId));

  const heroInitialDuration = 1.0;
  const heroExitDuration = 0.8;
  const heroAnimationTotalTime = heroInitialDuration + heroExitDuration + 0.3;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroAnimation(false);
    }, heroAnimationTotalTime * 1000);
    return () => clearTimeout(timer);
  }, [heroAnimationTotalTime]);

  const handleProjectClick = (projectId) => {
    setFeaturedProject(getProjectById(projectId));
  };

  return (
    <div className="app-container">
     
      <AnimatePresence>
        {showHeroAnimation && (
          <motion.div
            className="hero-animation-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, delay: heroExitDuration - 0.2 } }}
          >
            

          <motion.img
            src="/herophoto.png" 
            alt="Your Photo"
            className="hero-animation-image"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: heroInitialDuration, ease: "easeOut" }}
            exit={{
              scale: 0.3, 
              x: window.innerWidth * 0.05, 
              y: window.innerHeight * -0.25, 
              borderRadius: '16px', 
              opacity: 1,
              transition: { duration: heroExitDuration, ease: "easeInOut" }
            }}
          />

          </motion.div>
        )}
      </AnimatePresence>

      <Navbar /> 

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: heroAnimationTotalTime + 0.2 }}
      >
        <main style={{ marginTop: '6rem' }}>
          <BentoGrid
            initialDelay={heroAnimationTotalTime + 0.5}
            projects={projects}
            featuredProject={featuredProject}
            onProjectClick={handleProjectClick}
          />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;