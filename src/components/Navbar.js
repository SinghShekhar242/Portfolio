import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
    >
      <a href="#top" className="navbar-logo">Singh Shekhar</a>
      
    </motion.nav>
  );
}

export default Navbar;