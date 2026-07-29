export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'understanding-redis-job-queues',
    title: 'Building a Fault-Tolerant Job Queue with Redis and Node.js',
    description: 'A deep dive into designing horizontal asynchronous task queues using Redis pub/sub, heartbeat monitoring, and exponential backoff retry policies.',
    date: 'Mar 15, 2026',
    readTime: '6 min read',
    tags: ['Node.js', 'Redis', 'Distributed Systems', 'Backend'],
    content: `
When building high-throughput backend services, synchronous processing quickly becomes a bottleneck. Heavy computation, PDF rendering, sending emails, or indexing documents should never block client HTTP response cycles.

### The Producer-Consumer Architecture

In our system design, the API web server acts strictly as a **Producer**. It accepts requests, validates payloads, and immediately pushes job payloads into a Redis queue with a unique tracking ID.

\`\`\`javascript
// Simplified enqueue producer
async function enqueueJob(queueName, data) {
  const jobId = crypto.randomUUID();
  const payload = JSON.stringify({ id: jobId, data, timestamp: Date.now() });
  await redis.lpush(queueName, payload);
  return jobId;
}
\`\`\`

### Ensuring Zero Data Loss with Reliable Queuing

Standard \`RPOP\` removes a message from the queue before processing. If the worker process crashes mid-task, that job is lost forever. To solve this, we utilize Redis \`BRPOPLPUSH\` (or atomic \`LMOVE\` in Redis 6.2+) to atomically pop from the pending queue and push into a active processing queue.

If a worker node crashes or misses heartbeats, a supervisor process recovers stale jobs from the processing queue and re-enqueues them.

### Exponential Backoff Retry Policy

Failures are inevitable in distributed environments (network hiccups, external API rate limits). We implemented exponential backoff:

$$ \\text{Delay} = \\text{Base} \\times 2^{\\text{attempt}} + \\text{Jitter} $$

This prevents thundering herd problems when an upstream service recovers from an outage.
    `,
  },
  {
    slug: 'web-sockets-collaborative-editing',
    title: 'Lessons Learned from Building a Real-Time Collaborative Text Editor',
    description: 'Exploring WebSockets, operational transforms, optimistic UI rendering, and sub-50ms latency synchronization across concurrent users.',
    date: 'Feb 10, 2026',
    readTime: '8 min read',
    tags: ['React', 'WebSockets', 'Socket.io', 'System Design'],
    content: `
Building real-time collaborative interfaces requires shifting from request-response models to persistent bidirectional state streaming.

### Why WebSockets Over Polling?

HTTP Long Polling introduces headers overhead and request latency. WebSockets establish a single persistent TCP connection with low frame overhead, allowing bidirectional sub-50ms message delivery.

### Operational Transforms (OT) vs CRDTs

When two users type simultaneously at index 5 of a document:
- User A inserts "hello"
- User B inserts "world"

Without conflict resolution, user states diverge immediately. We implemented Operational Transformations (OT) on the Node.js server:
1. Server receives Operation A from Client A.
2. Server checks server revision counter.
3. Server transforms incoming Operation B against concurrent operations before broadcasting to all clients.

### Optimistic UI Updates & Server Reconciliation

To keep the UI responsive for local typing, edits are rendered instantly on the client DOM before acknowledgment from the WebSocket server. If a conflict arises, the client performs a rollback and reconciles state cleanly.
    `,
  },
  {
    slug: 'fastapi-rag-architecture',
    title: 'Designing RAG Systems with FastAPI and Vector Databases',
    description: 'How to build high-performance Retrieval-Augmented Generation systems using FastAPI, embedding pipelines, vector databases, and JWT authentication.',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
    tags: ['FastAPI', 'Python', 'Vector DB', 'AI Engine', 'Cloud Run'],
    content: `
Retrieval-Augmented Generation (RAG) unlocks accurate context-aware responses from LLMs by injecting relevant codebase documents directly into prompt windows.

### Asynchronous Python with FastAPI

FastAPI leverages ASGI (Asynchronous Server Gateway Interface) built on top of Starlette and Pydantic. Async endpoint handlers allow non-blocking concurrency during vector similarity queries and external API calls.

### Vector Search Pipeline

1. **Chunking**: Code files are parsed into semantic chunks (functions, classes) preserving AST context.
2. **Embedding**: Chunks are embedded into high-dimensional vector representations.
3. **Similarity Search**: Cosine similarity metrics retrieve the Top-K relevant code blocks in under 150ms.
4. **Context Injection**: Retrieved code blocks are passed to the language model to answer structural queries accurately.

### Deployment on Google Cloud Run

Deploying containerized FastAPI microservices on Google Cloud Run enables automatic scaling from zero instances to handling surge traffic effortlessly while keeping infrastructure costs minimal.
    `,
  },
  {
    slug: 'json-schema-open-source',
    title: 'Deep Dive into Open Source: Contributing to JSON Schema',
    description: 'My experience navigating open source codebases, understanding specification implementations, and submitting meaningful pull requests.',
    date: 'Dec 05, 2025',
    readTime: '5 min read',
    tags: ['Open Source', 'JSON Schema', 'JavaScript', 'Community'],
    content: `
Contributing to established open source projects like JSON Schema (json-schema-org) is one of the most rewarding ways to grow as a software engineer.

### Understanding Modular Architectures

Large specifications split concerns into validation keywords, vocabulary definitions, and schema parsing modules. Inspecting the repo's internal dependencies and test suites revealed how strict architectural isolation keeps complex validation suites maintainable.

### Key Takeaways

1. **Read the RFC & Specs**: Specifications require meticulous adherence to edge-case validation rules.
2. **Write Exhaustive Unit Tests**: Open source maintainers prioritize clear test coverage.
3. **Communicate Early**: Discussing architectural designs in GitHub Discussions avoids wasted engineering effort.
    `,
  },
  {
    slug: 'dsa-recursion-dynamic-programming',
    title: 'Mastering Recursion and Dynamic Programming: Key Insights',
    description: 'Breakdown of core strategies for solving DP problems: state representation, memoization, bottom-up iteration, and space optimization.',
    date: 'Nov 18, 2025',
    readTime: '6 min read',
    tags: ['DSA', 'Algorithms', 'Dynamic Programming', 'Python'],
    content: `
Dynamic Programming (DP) often seems intimidating, but it breaks down into identifying overlapping subproblems and optimal substructure.

### Top-Down (Memoization) vs Bottom-Up (Tabulation)

- **Memoization**: Recursively solve problems while caching results in a hash table or array.
- **Tabulation**: Iteratively build solutions from base cases upwards.

### Standard Problem Framework

1. Define the state variable: \`dp[i]\` represents the sub-problem solution for index \`i\`.
2. Determine state transition equations:
$$ dp[i] = \\min(dp[i - 1], dp[i - 2]) + \\text{cost}[i] $$
3. Identify base cases cleanly.
4. Optimize space complexity from \\(O(N)\\) to \\(O(1)\\) where state only depends on previous steps.
    `,
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
