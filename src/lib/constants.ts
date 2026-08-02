export const SITE_CONFIG = {
  name: 'Rithika Lakshmi Padala',
  title: 'Machine Learning & Software Engineer',
  description: 'Building machine learning pipelines, predictive models, and scalable distributed systems.',
  url: 'https://rithika016.github.io/portfolio/',
  email: 'padalaritikalakshmi@mictech.edu.in',
  github: 'https://github.com/Rithika016',
  linkedin: 'https://linkedin.com/in/rithika-lakshmi-padala-311ab9358/',
  location: 'Vijayawada, India',
  resumeUrl: 'https://rithika016.github.io/portfolio/resume.pdf',
};

export const SKILLS = {
  machineLearning: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Supervised Learning', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation', 'EDA'],
  languages: ['Python', 'Java', 'SQL', 'C++', 'JavaScript'],
  frameworks: ['FastAPI', 'Flask', 'Node.js', 'Express', 'React', 'REST APIs'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  tools: ['Jupyter Notebook', 'Docker', 'Git', 'GitHub', 'Google Cloud Platform (GCP)', 'Gemini API'],
};

export const EXPERIENCE = {
  education: {
    institution: 'DVR & Dr. HS MIC College of Technology',
    degree: 'Bachelor of Technology in Information Technology',
    cgpa: '9.50 / 10.00',
    expected: 'Expected May 2028',
    coursework: ['Data Structures & Algorithms', 'Machine Learning Fundamentals', 'Database Management Systems (SQL)', 'Operating Systems', 'Object-Oriented Programming', 'Probability & Statistics'],
  },
};

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  date: string;
  github?: string;
  live?: string;
  featured: boolean;
  problem: string;
  architecture: string;
  challenges: string[];
  decisions: string[];
  metrics: { label: string; value: string }[];
  mermaidDiagram: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'ml-predictive-pipeline',
    title: 'Machine Learning & Predictive Modeling Pipeline',
    subtitle: 'End-to-end ML data processing and classification engine',
    description: 'Engineered end-to-end Machine Learning pipelines in Python using Scikit-learn, Pandas, and NumPy, achieving 90%+ classification accuracy across tabular benchmark datasets with automated preprocessing and hyperparameter tuning.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    date: 'Feb 2026',
    github: 'https://github.com/Rithika016',
    featured: true,
    problem: 'Raw data requires structured cleaning, feature scaling, and feature selection before training machine learning models to prevent overfitting and ensure robust generalization.',
    architecture: 'A Python-based ML pipeline ingests raw tabular datasets, performs exploratory data analysis (EDA), imputes missing values, scales numerical features, encodes categorical variables, and trains supervised learning algorithms (Logistic Regression, Decision Trees, Random Forests) using k-fold cross-validation.',
    challenges: [
      'Handling multi-feature tabular data with missing values and skewed distributions',
      'Preventing data leakage during feature preprocessing and scaling',
      'Optimizing model metrics across imbalanced class distributions',
      'Selecting optimal hyperparameters using GridSearch cross-validation',
    ],
    decisions: [
      'Used Scikit-learn Pipeline and ColumnTransformer for clean leakage-free data processing',
      'Evaluated performance using Precision, Recall, F1-Score, and ROC-AUC metrics',
      'Implemented Matplotlib visualizations for feature importance and confusion matrices',
      'Used k-fold cross-validation for robust out-of-sample error estimation',
    ],
    metrics: [
      { label: 'Accuracy', value: '90%+' },
      { label: 'Validation', value: 'K-Fold CV' },
      { label: 'Preprocessing', value: 'Automated' },
      { label: 'Libraries', value: 'Scikit-learn' },
    ],
    mermaidDiagram: `graph LR
    A[Raw Tabular Data] -->|Pandas EDA| B[Data Cleaning & Scaling]
    B -->|Feature Selection| C[Scikit-learn Pipeline]
    C -->|K-Fold CV| D[Model Training & Tuning]
    D -->|Evaluation| E[Precision / Recall / F1 Metrics]`,
  },
  {
    slug: 'scalable-code-search',
    title: 'Scalable Code Search & Semantic Retrieval Engine',
    subtitle: 'High-throughput text parsing & vector indexing pipeline',
    description: 'Architected and deployed a search engine in Python processing 10,000+ files, cutting indexing and querying latency to under 150ms for 100 concurrent users using FastAPI and Redis caching on Google Cloud Run.',
    techStack: ['Python', 'FastAPI', 'Docker', 'Redis', 'PostgreSQL', 'GCP'],
    date: 'Mar 2026',
    github: 'https://github.com/Rithika016',
    featured: true,
    problem: 'Navigating large code repositories requires fast, sub-second indexing and querying over multi-threaded data ingestion pipelines.',
    architecture: 'A Python and FastAPI backend parses code files into structured tokens, indexes data across PostgreSQL and MongoDB stores, and serves concurrent search queries with sub-150ms latency using Redis caching.',
    challenges: [
      'Ingesting and parsing 10,000+ code files concurrently without blocking workers',
      'Maintaining sub-150ms query response times under high concurrent user load',
      'Orchestrating multi-container deployments on Google Cloud Run',
    ],
    decisions: [
      'Chose FastAPI for asynchronous request handling and high-throughput Python execution',
      'Used Redis caching layer to avoid redundant database reads for frequent queries',
      'Containerized backend services with Docker for scalable GCP deployment',
    ],
    metrics: [
      { label: 'Query Latency', value: '<150ms' },
      { label: 'Files Ingested', value: '10,000+' },
      { label: 'Concurrency', value: '100 Users' },
      { label: 'Cloud Deployment', value: 'GCP Run' },
    ],
    mermaidDiagram: `graph TB
    A[Query Input] -->|FastAPI Async| B[Parsing & Search Pipeline]
    B -->|Cache Lookup| C[Redis Cache]
    C -->|Cache Miss| D[PostgreSQL & MongoDB]
    C -->|Cache Hit| E[Response <150ms]
    D -->|Store Result| C`,
  },
  {
    slug: 'distributed-key-value-store',
    title: 'Distributed Key-Value Engine with Raft Consensus',
    subtitle: 'Fault-tolerant distributed state replication store',
    description: 'Engineered a 5-node distributed key-value data store in Python implementing Raft consensus for leader election, state replication, and log consistency achieving 3,000+ ops/sec throughput.',
    techStack: ['Python', 'gRPC', 'Concurrency', 'System Design'],
    date: 'Feb 2026',
    github: 'https://github.com/Rithika016',
    featured: true,
    problem: 'Distributed storage systems require strict consensus protocols to maintain consistency across node failures and network partitions.',
    architecture: 'Implemented Raft consensus in Python with heartbeat monitoring, leader election, and log replication across 5 distributed nodes, handling 3,000+ ops/sec throughput under concurrent client load.',
    challenges: [
      'Handling split-brain scenarios during network partitions',
      'Managing thread synchronization and state locks without deadlocks',
      'Ensuring crash recovery via write-ahead logging',
    ],
    decisions: [
      'Implemented Raft leader election and heartbeat timers using Python threading',
      'Built custom chaos-testing framework to simulate node drops and network failure',
    ],
    metrics: [
      { label: 'Throughput', value: '3,000+ ops/sec' },
      { label: 'Cluster Size', value: '5 Nodes' },
      { label: 'Protocol', value: 'Raft Consensus' },
      { label: 'Consistency', value: 'Zero Data Loss' },
    ],
    mermaidDiagram: `graph TB
    A[Client Requests] -->|gRPC| B[Raft Leader Node]
    B -->|Log Replication| C[Follower Node 1]
    B -->|Log Replication| D[Follower Node 2]
    B -->|Log Replication| E[Follower Node 3]
    B -->|Majority Ack| F[Commit State to Store]`,
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Amazon ML Summer School 2026',
    description: 'Qualified for the national selection test from a competitive nationwide applicant pool.',
    icon: 'Brain',
  },
  {
    title: 'Machine Learning Specialization',
    description: 'Certified by Stanford University & DeepLearning.AI (Instructor: Andrew Ng) on Coursera.',
    icon: 'Award',
  },
  {
    title: 'Flipkart Grid 8.0',
    description: 'Advanced to national selection round among 100,000+ nationwide participants (2026).',
    icon: 'Trophy',
  },
  {
    title: '3x Hackathon Winner',
    description: 'Won 1st place in 3 inter-college hackathons (AI for Bharat, GenAI Exchange, Sitestrom) as Team Lead.',
    icon: 'Trophy',
  },
  {
    title: 'Academic Excellence (CGPA 9.50/10)',
    description: 'Consistently ranked in the top 5% of department (200+ students) at MIC College of Technology.',
    icon: 'GraduationCap',
  },
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'System Design', href: '#system-design' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
