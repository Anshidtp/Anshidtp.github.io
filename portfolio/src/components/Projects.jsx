import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Code, Layers, Zap } from 'lucide-react';
import { projectsData, categories } from '../data/projectData';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              A showcase of my best work in AI, machine learning, and data science. Each project
              represents a unique challenge and innovative solution.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'glass text-gray-400 hover:text-white hover:border-primary/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="project-card glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-xs font-bold">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 text-sm text-gray-400 hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-secondary transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass rounded-3xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-primary/20 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{selectedProject.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                {/* Project Image */}
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                      <Zap className="text-primary" />
                      <span>Key Features</span>
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {selectedProject.technologies && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                      <Code className="text-secondary" />
                      <span>Technologies Used</span>
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(selectedProject.technologies).map(([category, techs]) => (
                        <div key={category}>
                          <h4 className="text-sm font-semibold text-primary uppercase mb-2">
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 glass rounded-full text-sm border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                    <Layers className="text-accent-purple" />
                    <span>Tags</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 glass rounded-full text-sm border border-primary/30 hover:border-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full glass border border-white/20 hover:border-primary transition-all"
                  >
                    <Github size={20} />
                    <span>View Source Code</span>
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;