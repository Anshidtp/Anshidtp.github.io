import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-semibold text-primary border border-primary/30">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Anshid TP</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-semibold text-gray-300">
              AI Developer & Data Analyst
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Transforming complex data into intelligent solutions through advanced machine learning,
              neural networks, and cutting-edge AI technologies. Passionate about building systems
              that make a real-world impact.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="btn-primary flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <ArrowDown size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-full glass border border-primary/30 hover:border-primary transition-all duration-300 font-bold flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <Mail size={20} />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-4">
              <motion.a
                href="https://github.com/Anshidtp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anshid-tp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="mailto:connect.anshid@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={28} />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="text-gray-400 hover:text-primary transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Download size={28} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - 3D Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Glowing Circle Background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent-purple opacity-30 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Profile Image Container */}
              <motion.div
                className="relative glass rounded-3xl overflow-hidden border-4 border-primary/30 glow"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Replace with your actual photo */}
                <img
                  src="https://github.com/Anshidtp/Anshidtp.github.io/blob/main/portfolio/src/assets/intro.png?raw=true"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">5+</div>
                      <div className="text-xs text-gray-400">Years Exp</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-purple">12</div>
                      <div className="text-xs text-gray-400">ML Models</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Icons */}
              {/* <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 glass rounded-2xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-3xl">🤖</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 glass rounded-2xl flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-3xl">📊</span>
              </motion.div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;