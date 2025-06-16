import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectListCard.css';

function ProjectListCard({ projects, featuredProject, onProjectClick, id }) {

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

 
  const featuredContentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <motion.div
      className="bento-item project-list-card"
      id={id}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
      }}
    >
      <div className="project-list-header">
        <h3 className="project-list-title">My Work</h3>
      </div>

      <div className="project-showcase-area">
        <AnimatePresence mode='wait'> 
          <motion.div
            key={featuredProject.id} // Key changes when featuredProject changes, triggering exit/enter
            variants={featuredContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="featured-project-content"
          >
            <img src={featuredProject.image} alt={featuredProject.name} className="featured-project-image" />
            <h4 className="featured-project-name">{featuredProject.name}</h4>
            <p className="featured-project-description">{featuredProject.description}</p>
            <a href={featuredProject.url} target="_blank" rel="noopener noreferrer" className="featured-project-link">
                View Project <span className="arrow">→</span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="project-list-scroll-area">
        <h5 className="other-projects-heading">Other Projects:</h5>
        <ul className="project-list">
          {projects.map(project => (
            <motion.li
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className={`project-list-item ${featuredProject.id === project.id ? 'active' : ''}`}
              variants={listItemVariants} // Apply stagger to these if needed
            >
              {project.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectListCard;