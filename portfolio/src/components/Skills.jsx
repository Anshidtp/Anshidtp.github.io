import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'R', 'SQL', 'Java', 'C++'],
      color: 'from-primary to-primary-dark',
    },
    {
      category: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost', 'LightGBM'],
      color: 'from-secondary to-secondary-dark',
    },
    {
      category: 'Data Engineering',
      skills: ['Apache Spark', 'Airflow', 'Kafka', 'Hadoop', 'ETL', 'Data Warehousing'],
      color: 'from-accent-purple to-purple-600',
    },
    {
      category: 'Deep Learning & NLP',
      skills: ['BERT', 'Transformers', 'GPT', 'CNN', 'RNN', 'LSTM'],
      color: 'from-accent-blue to-blue-600',
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
      color: 'from-accent-yellow to-yellow-600',
    },
    {
      category: 'Data Visualization',
      skills: ['Tableau', 'Power BI', 'D3.js', 'Matplotlib', 'Plotly', 'Seaborn'],
      color: 'from-accent-pink to-pink-600',
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'MySQL', 'Elasticsearch'],
      color: 'from-green-500 to-green-700',
    },
    {
      category: 'Web Development',
      skills: ['React', 'Node.js', 'FastAPI', 'Flask', 'Django', 'REST APIs'],
      color: 'from-orange-500 to-red-600',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-accent-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent-blue opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              A comprehensive toolkit of modern technologies and frameworks for building
              intelligent, data-driven solutions.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <span className="text-2xl font-bold">{categoryIndex + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="skill-badge"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-2xl">
                  🧠
                </div>
                <h4 className="font-bold">Neural Networks</h4>
                <p className="text-sm text-gray-400">Deep Learning Architecture Design</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center text-2xl">
                  📊
                </div>
                <h4 className="font-bold">Big Data Analytics</h4>
                <p className="text-sm text-gray-400">Large-Scale Data Processing</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-purple to-purple-600 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <h4 className="font-bold">MLOps</h4>
                <p className="text-sm text-gray-400">Production ML Systems</p>
              </div>
            </div>
          </motion.div>

          {/* Tools & Technologies Timeline */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Technology Stack Evolution</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent-purple"></div>
              
              <div className="space-y-8">
                {[
                  { year: '2019', tech: 'Python, SQL, Tableau' },
                  { year: '2020', tech: 'TensorFlow, Scikit-learn, AWS' },
                  { year: '2021', tech: 'PyTorch, Docker, Kubernetes' },
                  { year: '2022', tech: 'Transformers, MLOps, FastAPI' },
                  { year: '2023', tech: 'LLMs, RAG, Vector Databases' },
                  { year: '2024', tech: 'Advanced AI Agents, Multi-modal AI' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="glass p-4 rounded-xl inline-block">
                        <div className="font-bold text-primary text-lg">{item.year}</div>
                        <div className="text-gray-400 text-sm">{item.tech}</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-dark z-10"></div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;