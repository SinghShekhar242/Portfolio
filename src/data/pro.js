

export const initialFeaturedProjectId = 'proj1';

export const projects = [
    {
        id: 'proj1',
        name: 'E-commerce Redesign',
        image: '/images/projects/project1.jpg', 
        description: 'A complete UI/UX overhaul for a modern online retail platform, focusing on conversion rates and user satisfaction. This project involved extensive user research, wireframing, and high-fidelity prototyping.',
        url: 'https://example.com/project/ecommerce-redesign'
    },
    {
        id: 'proj2',
        name: 'SaaS Dashboard Dev',
        image: 'https://via.placeholder.com/800x600/8B5E3C/F8F5EE?text=SaaS+Dashboard+Dev',
        description: 'Developed a responsive and interactive dashboard for a B2B SaaS application using React, Redux, and D3.js for data visualization. Improved data accessibility and user engagement by 30%.',
        url: 'https://example.com/project/saas-dashboard'
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