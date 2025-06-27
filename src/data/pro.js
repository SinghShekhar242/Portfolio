

export const initialFeaturedProjectId = 'proj1';

export const projects = [
    {
        id: 'proj1',
        name: 'Zomato Clone',
        image: '/images/projects/zomato.jpg', 
        description: 'A full-stack Zomato clone enabling seamless food discovery, restaurant Browse, and order placement with intuitive UI/UX.',
        url: 'https://github.com/SinghShekhar242/Zomato'
    },
    {
        id: 'proj2',
        name: 'Cynthia Website',
        image: '/images/projects/cynthia.jpg',
        description: 'A dynamic, animated website clone of a product designers portfolio, built to master GSAP, intricate animations, and custom cursor effects.',
        url: 'https://github.com/SinghShekhar242/Cynthia-website'
    },
    {
        id: 'proj3',
        name: 'Mobile App Concept: MedFlow',
        image: 'https://via.placeholder.com/800x600/2E2824/F8F5EE?text=MedFlow+App',
        description: 'Designed an intuitive mobile application concept for managing patient medical records and appointments. Focused on simplifying complex workflows and ensuring data privacy.',
        url: 'https://example.com/project/medflow-app'
    },
    {
        id: 'proj4',
        name: 'Personal Portfolio V3',
        image: 'https://via.placeholder.com/800x600/A9A9A9/1A1A1A?text=Portfolio+V3',
        description: 'The current iteration of my personal portfolio, showcasing my skills and projects, built with React, Framer Motion, and a custom CSS Grid layout.',
        url: 'https://github.com/yourusername/your-portfolio'
    },
    {
        id: 'proj5',
        name: 'Brand Identity Creation',
        image: 'https://via.placeholder.com/800x600/4B3219/F8F5EE?text=Brand+Identity',
        description: 'Developed a comprehensive brand identity for a startup, including logo design, color palette, typography, and brand guidelines to establish a strong market presence.',
        url: 'https://example.com/project/brand-identity'
    },
    {
        id: 'proj6',
        name: 'API Integration Project',
        image: 'https://via.placeholder.com/800x600/5C3D22/F8F5EE?text=API+Integration',
        description: 'Built a backend service that aggregates data from multiple third-party APIs, providing a unified and efficient data source for a frontend application.',
        url: 'https://example.com/project/api-integration'
    }
];

export const getProjectById = (id) => projects.find(project => project.id === id);