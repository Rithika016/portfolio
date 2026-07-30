export const SITE_CONFIG = {
  name: 'Rithika Lakshmi Padala',
  title: 'Software Engineer',
  description: 'Building scalable distributed systems and backend infrastructure.',
  url: 'https://rithika.dev',
  email: 'padalaritikalakshmi@mictech.edu.in',
  github: 'https://github.com/Rithika016',
  linkedin: 'https://linkedin.com/in/rithika-lakshmi-padala',
  location: 'Vijayawada, India',
  resumeUrl: '/portfolio/resume.pdf',
};

export const SKILLS = {
  languages: ['Java', 'JavaScript (ES6+)', 'Python', 'SQL', 'C++', 'Go'],
  frameworks: ['React', 'Node.js', 'Next.js', 'FastAPI', 'Express'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Vector Databases'],
  tools: ['Git', 'GitHub', 'Docker', 'Google Cloud Run', 'Linux', 'WebSockets'],
};

export const EXPERIENCE = {
  education: {
    institution: 'DVR & Dr. HS MIC College of Technology',
    degree: 'Bachelor of Technology in Information Technology',
    cgpa: '9.5 / 10.0',
    expected: 'Expected May 2028',
    coursework: ['Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Object-Oriented Programming', 'Computer Networks'],
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
    slug: 'distributed-job-queue',
    title: 'Distributed Job Queue System',
    subtitle: 'Scalable asynchronous task processing',
    description: 'Designed and engineered a distributed job queue system in Node.js utilizing Redis for fast message broker storage and backend task routing with robust error handling and automated retry policies.',
    techStack: ['Node.js', 'Redis', 'Docker', 'Git'],
    date: 'Mar 2026',
    github: 'https://github.com/Rithika016',
    featured: true,
    problem: 'Modern backend systems need reliable, fault-tolerant asynchronous task processing that can scale horizontally. Traditional synchronous processing creates bottlenecks and single points of failure.',
    architecture: 'The system uses a producer-consumer architecture with Redis as the central message broker. Producers enqueue tasks with metadata and priority levels. A pool of Docker-containerized workers consume tasks from Redis queues, process them, and report results. Failed tasks are automatically retried with exponential backoff.',
    challenges: [
      'Ensuring zero data loss during worker crashes or network partitions',
      'Implementing fair task distribution across multiple worker instances',
      'Managing Redis memory under high-throughput scenarios',
      'Designing an effective retry strategy with exponential backoff',
    ],
    decisions: [
      'Chose Redis over RabbitMQ for simplicity and performance in the pub/sub pattern',
      'Implemented worker health monitoring via heartbeat mechanism',
      'Used Docker Compose for consistent multi-container orchestration',
      'Designed idempotent task handlers to safely support retries',
    ],
    metrics: [
      { label: 'Data Loss', value: 'Zero' },
      { label: 'Retry Policy', value: 'Exponential Backoff' },
      { label: 'Containerized', value: 'Docker' },
      { label: 'Scaling', value: 'Horizontal' },
    ],
    mermaidDiagram: `graph LR
    A[Producer API] -->|Enqueue| B[Redis Queue]
    B -->|Dequeue| C[Worker Pool]
    C -->|Process| D[Task Handler]
    D -->|Success| E[Results Store]
    D -->|Failure| F[Retry Queue]
    F -->|Backoff| B
    C -->|Heartbeat| G[Health Monitor]`,
  },
  {
    slug: 'realtime-collaborative-editor',
    title: 'Real-Time Collaborative Editor',
    subtitle: 'Multi-user document editing with conflict resolution',
    description: 'Built a scalable real-time collaborative text editor using Node.js, Express, React, and WebSockets (Socket.io) supporting simultaneous multi-user document editing with ~50ms latency.',
    techStack: ['Node.js', 'React', 'WebSockets', 'Express', 'Socket.io'],
    date: 'Jan 2026',
    github: 'https://github.com/Rithika016',
    featured: true,
    problem: 'Real-time collaboration requires handling concurrent edits from multiple users with minimal latency, while maintaining document consistency and resolving conflicts automatically.',
    architecture: 'A React frontend communicates with an Express + Socket.io backend via persistent WebSocket connections. The server maintains authoritative document state and broadcasts operational transforms to all connected clients. A conflict resolution algorithm ensures eventual consistency across all clients.',
    challenges: [
      'Designing an efficient conflict resolution algorithm for concurrent edits',
      'Minimizing latency for real-time state synchronization across clients',
      'Handling client disconnections and reconnections gracefully',
      'Optimizing React component re-renders during rapid document updates',
    ],
    decisions: [
      'Used WebSockets (Socket.io) over polling for true real-time bidirectional communication',
      'Implemented operational transform for deterministic conflict resolution',
      'Designed optimistic UI updates with server reconciliation',
      'Used React state management with optimized component renders',
    ],
    metrics: [
      { label: 'Latency', value: '~50ms' },
      { label: 'Protocol', value: 'WebSocket' },
      { label: 'Conflict Resolution', value: 'OT-based' },
      { label: 'Multi-user', value: 'Yes' },
    ],
    mermaidDiagram: `graph TB
    A[Client A] -->|WebSocket| D[Express + Socket.io Server]
    B[Client B] -->|WebSocket| D
    C[Client C] -->|WebSocket| D
    D -->|OT Algorithm| E[Conflict Resolution]
    E -->|Broadcast| A
    E -->|Broadcast| B
    E -->|Broadcast| C
    D -->|Persist| F[Document Store]`,
  },
  {
    slug: 'ai-codebase-assistant',
    title: 'AI Codebase Assistant',
    subtitle: 'RAG-powered semantic code search',
    description: 'Built and deployed a full-stack retrieval-augmented generation (RAG) system for querying GitHub codebases using semantic search, reducing code exploration time by 60%.',
    techStack: ['FastAPI', 'React', 'Vector DB', 'MongoDB', 'JWT', 'Google Cloud Run'],
    date: 'Nov 2025',
    github: 'https://github.com/Rithika016',
    live: '#',
    featured: true,
    problem: 'Navigating and understanding large codebases is extremely time-consuming. Developers spend significant time searching for relevant code, understanding module relationships, and finding implementation patterns.',
    architecture: 'A React frontend sends queries to a FastAPI backend. The backend uses a vector database for semantic code indexing and retrieval, MongoDB for metadata and user session tracking, and JWT for stateless authentication. The system is containerized and deployed on Google Cloud Run with Redis caching for low-latency responses.',
    challenges: [
      'Building an efficient semantic indexing pipeline for large codebases',
      'Optimizing vector search for sub-200ms query latency',
      'Implementing secure JWT-based authentication flow',
      'Deploying and scaling on Google Cloud Run with Redis caching',
    ],
    decisions: [
      'Chose FastAPI for async request handling and automatic OpenAPI documentation',
      'Used vector databases over traditional full-text search for semantic understanding',
      'Implemented JWT tokens for stateless, scalable authentication',
      'Deployed on Google Cloud Run for automatic scaling and cost optimization',
    ],
    metrics: [
      { label: 'Search Reduction', value: '60%' },
      { label: 'Query Latency', value: '~150ms' },
      { label: 'Auth', value: 'JWT' },
      { label: 'Deployment', value: 'Cloud Run' },
    ],
    mermaidDiagram: `graph TB
    A[React Frontend] -->|Query| B[FastAPI Backend]
    B -->|Auth| C[JWT Middleware]
    C -->|Validated| D[RAG Pipeline]
    D -->|Embed| E[Vector Database]
    D -->|Metadata| F[MongoDB]
    E -->|Results| D
    D -->|Response| A
    B -->|Cache| G[Redis]`,
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Hackathon Competitor',
    description: 'Competed and delivered reliable software solutions under constraints at AI for Bharat, GenAI Exchange, and Sitestrom hackathons.',
    icon: 'Trophy',
  },
  {
    title: 'Google Skills Lab — Track 2',
    description: 'Successfully completed Track 2, developing foundational AI and cloud engineering capabilities.',
    icon: 'Award',
  },
  {
    title: '50+ DSA Problems',
    description: 'Solved 50+ Data Structures and Algorithms problems across Dynamic Programming, Recursion, and Hashing.',
    icon: 'Code',
  },
  {
    title: 'Open Source Contributor',
    description: 'Analyzed and contributed to JSON Schema (json-schema-org), understanding modular architectures and design patterns.',
    icon: 'GitBranch',
  },
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];
