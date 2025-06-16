import React from 'react';
import { motion } from 'framer-motion';
import BentoItem from './BentoItem';
import ProjectListCard from './ProjectListCard';
import './BentoGrid.css';

function BentoGrid({ initialDelay = 0, projects, featuredProject, onProjectClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: initialDelay
      }
    }
  };

  return (
    <section className="bento-grid-container">
      <motion.div
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <BentoItem
            
            type="about"
            id="about-me-grid"
        />

        <BentoItem
            type="hero-image-grid" 
            id="hero-image-grid"
            image="/hp.png" 
        />

        
        <ProjectListCard
            projects={projects}
            featuredProject={featuredProject}
            onProjectClick={onProjectClick}
            id="work-grid"
        />

        
        <BentoItem
            title="Core Skills"
            description="React, JavaScript, HTML/CSS, Node.js, Figma, Git, Responsive Design, User Research, Prototyping."
            type="skill"
            id="skills-grid" 
        />

       
        <BentoItem
            title="Let's Talk"
            description="Have a project in mind or just want to chat? I'm always open to new opportunities."
            type="contact"
            id="contact-grid" 
            link="mailto:singhshekhar242935.com?subject=Portfolio%20Inquiry"
        />

       
        <BentoItem
            title="Connect" 
            description="Figma, GitHub, Instagram"
            type="social-bar-grid" 
            id="social-bar-grid"
           
        />

      </motion.div>
    </section>
  );
}

export default BentoGrid;