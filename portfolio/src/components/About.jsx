import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Database, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  const expertise = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Building robust ML models for predictive analytics and automated decision-making systems.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      description: 'Designing scalable data pipelines and ETL processes for big data infrastructure.',
      color: 'from-secondary to-secondary-dark',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Extracting actionable insights from complex datasets using advanced statistical methods.',
      color: 'from-accent-purple to-purple-600',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Deploying production-ready AI systems integrated with enterprise workflows.',
      color: 'from-accent-yellow to-yellow-600',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a passionate AI Developer and Data Analyst with expertise in transforming complex data
              into intelligent, actionable solutions. With a strong foundation in machine learning, deep
              learning, and data engineering, I build systems that drive real business value.
            </p>
          </motion.div>

          {/* Expertise Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  50+
                </motion.div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  2+
                </motion.div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  12
                </motion.div>
                <div className="text-gray-400 text-sm">ML Models Deployed</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  98%
                </motion.div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">My Journey</h3>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  My journey in AI and data science began during my undergraduate studies, where I
                  discovered the power of machine learning to solve real-world problems. Since then,
                  I've worked on diverse projects ranging from predictive analytics to computer vision.
                </p>
                <p className="leading-relaxed">
                  I specialize in building end-to-end ML pipelines, from data collection and preprocessing
                  to model deployment and monitoring. My approach combines solid engineering practices
                  with cutting-edge research to deliver scalable, production-ready solutions.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring new AI research papers, contributing to
                  open-source projects, or sharing knowledge through technical blogs and mentoring.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Education & Certifications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg">B.Tech in Electronics & Communication</h4>
                  <p className="text-gray-400 text-sm">First Class</p>
                  <p className="text-gray-500 text-xs">APJ Abdul Kalam Technological University • 2018-2022</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-lg">Certified Data Science Professional</h4>
                  <p className="text-gray-400 text-sm">Codeme Hub International Pvt Ltd</p>
                  <p className="text-gray-500 text-xs">2022-2023</p>
                </div>
                {/* <div className="border-l-4 border-accent-purple pl-4">
                  <h4 className="font-bold text-lg">AWS Machine Learning Specialty</h4>
                  <p className="text-gray-400 text-sm">Amazon Web Services</p>
                  <p className="text-gray-500 text-xs">2022</p>
                </div> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;