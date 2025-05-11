
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <div className="relative overflow-hidden rounded-lg border border-primary/10 shadow-xl">
              <img  className="w-full h-auto" alt="Professional workspace" src="https://images.unsplash.com/photo-1698945298361-365595d400eb" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-4">
              
                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                    <Calendar size={16} className="text-primary" />
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={2}
            >
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-muted-foreground mb-4">
  I'm a second-year Computer Physics student at Ain Shams University with a strong passion for web development and UI design. I enjoy building modern, responsive websites and web applications using technologies like HTML, CSS, JavaScript, Bootstrap, and React.
</p>
<p className="text-muted-foreground">
  I've worked on several personal projects, including an e-commerce platform, a car shop interface, and a game store website. I'm always eager to learn new technologies and turn creative ideas into functional, user-friendly digital experiences.
</p>

            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={3}
            >
         <h3 className="text-2xl font-bold mb-4">Experience & Education</h3>

<div className="space-y-4">
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <Briefcase size={20} className="text-primary" />
    </div>
    <div>
      <h4 className="font-semibold">Frontend Developer (Freelance)</h4>
      <p className="text-sm text-muted-foreground">Self-initiated Projects • 2023 - Present</p>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <Briefcase size={20} className="text-primary" />
    </div>
    <div>
      <h4 className="font-semibold">Project: E-commerce Website</h4>
      <p className="text-sm text-muted-foreground">Built a full UI using React, HTML, CSS & Bootstrap</p>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <GraduationCap size={20} className="text-primary" />
    </div>
    <div>
      <h4 className="font-semibold">B.Sc. in Computer Physics (In Progress)</h4>
      <p className="text-sm text-muted-foreground">Ain Shams University • 2024 - 2028 (Expected)</p>
    </div>
  </div>
</div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
