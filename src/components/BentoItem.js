import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BentoItem.css';


const rolesData = [
  { id: 1, role: "Co-Chairperson", descriptor: "of my college's E-cell committee" },
  { id: 2, role: "UI/UX Developer", descriptor: "crafting intuitive digital experiences" },
  { id: 3, role: "Web Developer", descriptor: "building robust and scalable applications" },
  
];

function BentoItem({ title, description, image, link, type, id }) {
  let itemClass = "bento-item";
  if (type) {
    itemClass += ` bento-item--${type}`;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // State for the rotating role text
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    // Cycle through roles every 3 seconds 
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % rolesData.length);
    }, 3000); 

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const renderContent = () => {
    if (type === "hero-image-grid" && image) {
      return <img src={image} alt="Profile" className="bento-item__profile-photo" />;
    }
    if (type === "social-bar-grid") {
      return (
        <div className="social-links-container">
          <a href="https://www.figma.com/@YOUR_FIGMA_USERNAME" target="_blank" rel="noopener noreferrer">Figma</a>
          <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      );
    }
    // New: Specific rendering for the 'about-me-grid' type
    if (id === "about-me-grid") {
      const currentRole = rolesData[currentRoleIndex];
      return (
        <div className="about-me-dynamic-content">
          <p className="about-me-intro-text">I am</p>
          <AnimatePresence mode='wait'>
            <motion.h3
              key={currentRole.id} // Key changes to trigger animation on role switch
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, position: 'absolute' }} // position: 'absolute' prevents layout shift on exit
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="about-me-changing-role"
            >
              {currentRole.role}
            </motion.h3>
          </AnimatePresence>
          <p className="about-me-descriptor">{currentRole.descriptor}</p>
        </div>
      );
    }

    // Default rendering for other BentoItem types
    return (
      <>
        {title && <h3 className="bento-item__title">{title}</h3>}
        {description && <p className="bento-item__description">{description}</p>}
        {link && (
          <a
            href={link}
            {...(link.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="bento-item__link"
          >
            {type === 'contact' ? 'Send Email' : 'View Details'}
            <span className="arrow">→</span>
          </a>
        )}
      </>
    );
  };

  return (
    <motion.div
      className={itemClass}
      id={id}
      variants={itemVariants}
    >
      {renderContent()}
    </motion.div>
  );
}

export default BentoItem;