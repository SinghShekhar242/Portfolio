

export const initialFeaturedProjectId = 'proj1';

export const projects = [
    {
        id: 'proj1',
        name: 'Career Guidance System',
        image: '/images/projects/career.png', 
        description: 'A smart career guidance system that helps users discover suitable career paths based on their interests and skills.It provides personalized recommendations, resources, and insights to support better career decisions.',
        url: 'https://github.com/SinghShekhar242/CareerGuidanceSystem'
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
        name: 'Recipe Book',
        image: '/images/projects/recipe.png',
        description: 'A simple and interactive recipe book project that lets you organize, browse, and explore different recipes in one place',
        url: 'https://github.com/SinghShekhar242/Recipe-Book'
    },
    {
        id: 'proj4',
        name: 'Weather App',
        image: '/images/projects/weather.png',
        description: 'A clean and user-friendly weather app that provides real-time weather updates for any location.It displays temperature, conditions, and forecasts to help users plan their day with ease',
        url: 'https://github.com/SinghShekhar242/WeatherWeb'
    },
    {
        id: 'proj5',
        name: 'Tic-Tac-Toe',
        image: '/images/projects/tictactoe.png',
        description: 'A fun and interactive Tic Tac Toe game where players can challenge each other or practice against the computer.It offers a simple design with engaging gameplay for quick entertainment.',
        url: 'https://github.com/SinghShekhar242/Tic-Tac-Toe'
    },
    {
        id: 'proj6',
        name: 'Zomato Clone',
        image: '/images/projects/zomato.jpg', 
        description: 'A full-stack Zomato clone enabling seamless food discovery, restaurant Browse, and order placement with intuitive UI/UX.',
        url: 'https://github.com/SinghShekhar242/Zomato'
    }
];

export const getProjectById = (id) => projects.find(project => project.id === id);