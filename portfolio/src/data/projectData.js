export const projectsData = [
  {
    id: 1,
    title: "Neural Architecture Search Optimizer",
    description: "Automated design of artificial neural networks using genetic algorithms for edge devices with distributed computing.",
    longDescription: "This project implements a sophisticated Neural Architecture Search (NAS) system that automatically discovers optimal neural network architectures. Using genetic algorithms and reinforcement learning, it evolves efficient models specifically optimized for edge devices. The system leverages distributed computing to parallelize the search process, dramatically reducing the time required to find high-performance architectures.",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "Kubernetes", "Docker", "Genetic Algorithms"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/nas-optimizer",
    liveUrl: "https://nas-optimizer-demo.vercel.app",
    features: [
      "Automated neural network architecture discovery",
      "Multi-objective optimization (accuracy, latency, size)",
      "Distributed computing with Kubernetes",
      "Support for multiple frameworks (TF, PyTorch)",
      "Real-time monitoring dashboard"
    ],
    technologies: {
      frontend: ["React", "D3.js", "Material-UI"],
      backend: ["Python", "FastAPI", "Redis"],
      ml: ["TensorFlow", "PyTorch", "ONNX"],
      devops: ["Docker", "Kubernetes", "GitHub Actions"]
    }
  },
  {
    id: 2,
    title: "Predictive Stock Market Analyzer",
    description: "Deep learning system for market volatility forecasting using LSTM networks and technical indicators.",
    longDescription: "Advanced stock market prediction system that combines deep learning with traditional financial analysis. Uses LSTM and Transformer models to analyze historical price data, sentiment from news, and technical indicators to forecast market movements with high accuracy.",
    category: "Data Science",
    tags: ["PyTorch", "Python", "SQL", "Time Series", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/stock-predictor",
    liveUrl: "https://stock-predictor-demo.vercel.app",
    features: [
      "Multi-timeframe prediction (daily, weekly, monthly)",
      "Sentiment analysis from financial news",
      "Technical indicators integration",
      "Portfolio optimization recommendations",
      "Real-time market data streaming"
    ],
    technologies: {
      frontend: ["React", "Recharts", "TailwindCSS"],
      backend: ["Python", "FastAPI", "PostgreSQL"],
      ml: ["PyTorch", "Scikit-learn", "Pandas"],
      data: ["Alpha Vantage API", "Twitter API", "Yahoo Finance"]
    }
  },
  {
    id: 3,
    title: "Global Health Dashboard",
    description: "Interactive D3.js visualization of WHO epidemiological data across 190 countries with real-time updates.",
    longDescription: "Comprehensive health data visualization platform that aggregates and displays global health metrics from the WHO and other sources. Features interactive maps, trend analysis, and predictive modeling for disease outbreaks.",
    category: "Data Visualization",
    tags: ["D3.js", "React", "Tableau", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/health-dashboard",
    liveUrl: "https://health-dashboard-demo.vercel.app",
    features: [
      "Interactive world map with heat visualization",
      "Time-series analysis of health metrics",
      "Country comparison tools",
      "Predictive outbreak modeling",
      "Export reports in multiple formats"
    ],
    technologies: {
      frontend: ["React", "D3.js", "Leaflet.js"],
      backend: ["Node.js", "Express", "MongoDB"],
      visualization: ["Tableau", "Chart.js", "Plotly"],
      data: ["WHO API", "Johns Hopkins Data", "Our World in Data"]
    }
  },
  {
    id: 4,
    title: "Sentiment Analysis Engine",
    description: "Real-time NLP processing for customer feedback across social media using BERT and transformer models.",
    longDescription: "Enterprise-grade sentiment analysis platform that processes millions of customer reviews, tweets, and feedback in real-time. Uses state-of-the-art transformer models to understand context, sarcasm, and multilingual content.",
    category: "NLP",
    tags: ["BERT", "Transformers", "Python", "FastAPI", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/sentiment-engine",
    liveUrl: "https://sentiment-engine-demo.vercel.app",
    features: [
      "Multi-language sentiment detection",
      "Emotion classification (happy, sad, angry, etc.)",
      "Aspect-based sentiment analysis",
      "Real-time social media monitoring",
      "Custom model training interface"
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Recharts"],
      backend: ["Python", "FastAPI", "Celery"],
      ml: ["Transformers", "BERT", "spaCy", "NLTK"],
      infrastructure: ["Redis", "RabbitMQ", "Docker"]
    }
  },
  {
    id: 5,
    title: "Big Data ETL Pipeline",
    description: "Scalable PySpark architecture processing 10TB+ daily datasets with AWS cloud infrastructure.",
    longDescription: "Enterprise-scale ETL pipeline that processes massive volumes of data daily. Built on Apache Spark and AWS, it handles data ingestion, transformation, and loading with fault tolerance and automatic scaling.",
    category: "Big Data",
    tags: ["PySpark", "AWS", "Airflow", "SQL", "Kafka"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/etl-pipeline",
    features: [
      "Auto-scaling based on data volume",
      "Data quality validation and monitoring",
      "Multiple data source connectors",
      "Incremental and full refresh modes",
      "Built-in data lineage tracking"
    ],
    technologies: {
      dataProcessing: ["Apache Spark", "PySpark", "Pandas"],
      orchestration: ["Apache Airflow", "Luigi"],
      storage: ["AWS S3", "Snowflake", "PostgreSQL"],
      streaming: ["Apache Kafka", "AWS Kinesis"],
      monitoring: ["Grafana", "Prometheus", "CloudWatch"]
    }
  },
  {
    id: 6,
    title: "Autonomous Agent Framework",
    description: "Multi-agent reinforcement learning system for robotic coordination using OpenAI Gym.",
    longDescription: "Advanced reinforcement learning framework enabling multiple autonomous agents to learn collaborative behaviors. Used in robotics, traffic optimization, and resource allocation scenarios.",
    category: "Reinforcement Learning",
    tags: ["Python", "OpenAI Gym", "PyTorch", "ROS", "Unity ML"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/multi-agent-rl",
    liveUrl: "https://agent-framework-demo.vercel.app",
    features: [
      "Multi-agent policy learning",
      "Communication protocol between agents",
      "3D simulation environment",
      "Transfer learning capabilities",
      "Real robot deployment support"
    ],
    technologies: {
      ml: ["PyTorch", "Stable Baselines3", "RLlib"],
      simulation: ["OpenAI Gym", "Unity ML-Agents", "PyBullet"],
      robotics: ["ROS", "Gazebo"],
      backend: ["Python", "FastAPI", "gRPC"]
    }
  },
  {
    id: 7,
    title: "Medical Imaging Diagnostic AI",
    description: "Computer vision system for identifying anomalies in X-rays, CT scans, and MRIs with 94% accuracy.",
    longDescription: "Deep learning system that assists radiologists in detecting abnormalities in medical images. Trained on millions of scans with expert annotations, achieving superhuman performance in specific diagnostic tasks.",
    category: "Computer Vision",
    tags: ["PyTorch", "OpenCV", "DICOM", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/medical-vision-ai",
    features: [
      "Multi-modality support (X-ray, CT, MRI)",
      "Anomaly detection and classification",
      "Heatmap visualization of findings",
      "DICOM format support",
      "Integration with PACS systems",
      "Explainable AI features"
    ],
    technologies: {
      ml: ["PyTorch", "TensorFlow", "MONAI"],
      vision: ["OpenCV", "Pillow", "SimpleITK"],
      backend: ["Python", "FastAPI", "PostgreSQL"],
      frontend: ["React", "Cornerstone.js"],
      deployment: ["Docker", "AWS SageMaker"]
    }
  },
  {
    id: 8,
    title: "Smart Recommendation System",
    description: "Collaborative filtering and deep learning hybrid recommender for e-commerce personalization.",
    longDescription: "Personalized recommendation engine that combines collaborative filtering, content-based methods, and deep learning to suggest products with high conversion rates. Processes user behavior in real-time.",
    category: "Machine Learning",
    tags: ["TensorFlow", "Python", "Redis", "MongoDB", "FastAPI"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/smart-recommender",
    features: [
      "Real-time personalization",
      "A/B testing framework",
      "Cold-start problem handling",
      "Explainable recommendations",
      "Multi-objective optimization"
    ],
    technologies: {
      ml: ["TensorFlow", "LightFM", "Scikit-learn"],
      backend: ["Python", "FastAPI", "Celery"],
      database: ["MongoDB", "Redis", "PostgreSQL"],
      tracking: ["Mixpanel", "Google Analytics"]
    }
  }
];

export const categories = [
  "All Projects",
  "Machine Learning",
  "Data Science",
  "Data Visualization",
  "NLP",
  "Big Data",
  "Computer Vision",
  "Reinforcement Learning"
];