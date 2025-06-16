import React from 'react';
import { motion } from 'framer-motion';
import './header.css';

function Header({ showAnimatedHero }) { 
  return (
    <header className="app-header">
      <div className="header-content">
        {showAnimatedHero && ( 
          <motion.img
            src="/your-hero-photo.jpg"
            alt="Your Photo"
            className="header-hero-photo"
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }} 
          />
        )}
        <h1>[Your Name]'s Portfolio</h1>
        <p>Crafting engaging digital experiences with a focus on UI/UX and Web Development.</p>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;