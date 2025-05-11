
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'An online shopping website with product display, responsive UI, and category-based filtering using React, HTML, CSS, and Bootstrap.',
    tags: [ 'JavaScript', 'HTML', 'CSS'],
    image: 'ecommerce',
    imagesrc:'/src/ecommerce.png',
    imageAlt: 'E-commerce site with product grid and categories',
    liveLink: 'https://ahmed26bosha.github.io/index.html/',
    githubLink: 'https://github.com/ahmed26bosha/index.html',
    featured: true
  },
  {
    id: 2,
    title: 'Game Store UI',
    description: 'A simple web interface to display and download game cards with descriptions and download links using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'gamestore',
    imagesrc:'/src/gamestore.png',
    imageAlt: 'Game store site with game covers and download buttons',
    liveLink: 'https://ahmed26bosha.github.io/Gamestore/',
    githubLink: 'https://github.com/your-username/game-store',
    featured: true
  },
  {
    id: 3,
    title: 'Car Shop Showcase',
    description: 'A car showcase web app where users can view various car models with info cards built using React and styled manually.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: 'carshop',
    imagesrc:'/src/carshop.png',
    imageAlt: 'Car shop interface with cards of cars',
    liveLink: 'https://ahmed26bosha.github.io/CarsShop/',
    githubLink: 'https://github.com/your-username/car-shop',
    featured: true
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'A simple weather application that shows real-time weather conditions using OpenWeatherMap API. Built with HTML, CSS, and JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS', 'API'],
    image: 'weather',
    imageAlt: 'Weather app showing temperature and weather conditions',
    liveLink: 'https://ahmed26bosha.github.io/Weather-APP/', // لو في رابط مباشر ضيفه هنا
    githubLink: 'https://github.com/ahmed26bosha/Weather-APP',
    featured: false
  }
];


const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll 
    ? projects 
    : projects.filter(project => project.featured);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my skills and expertise in web development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index + 1}
            >
              <div className="relative overflow-hidden aspect-video">
              <img
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  alt={project.imageAlt}
  src={`/images/${project.image}.png`}
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-card text-card-foreground p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAll && projects.length > 3 && (
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={4}
          >
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
