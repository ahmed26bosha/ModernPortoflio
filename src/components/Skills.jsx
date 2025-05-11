
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Server, Layout, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Layout className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/SASS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'bootstrap', level: 85 }
    ]
  },
{
  id: 'backend',
  title: 'Backend Development',
  icon: <Server className="h-6 w-6 text-primary" />,
  skills: [
    { name: 'Cpp', level: 90 },
    { name: 'Opject Oriented Programming', level: 85 },
    { name: 'Datastructures', level: 88 },
    { name: 'Algorithms', level: 80 },
   
  ]
},
  {
    id: 'design',
    title: 'Design',
    icon: <Palette className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'Adobe XD', level: 82 },
      { name: 'UI/UX Principles', level: 85 },
      { name: 'Responsive Design', level: 90 }
    ]
  },

  {
    id: 'soft',
    title: 'Soft Skills',
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Team Collaboration', level: 92 },
      { name: 'Time Management', level: 88 }
    ]
  }
];

const Skills = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-card rounded-xl p-6 border border-border shadow-sm card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index + 1}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
