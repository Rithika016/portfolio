# 🚀 Software Engineering Portfolio — Rithika Lakshmi Padala

A modern, production-ready, high-performance personal portfolio and engineering showcase built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

- 🎨 **Sleek Cyber-Dark Aesthetic**: Designed with custom HSL dark palettes, subtle glow effects, glassmorphic card overlays, and dynamic scroll indicators.
- ⚡ **Interactive Command Palette (`Ctrl+K` / `Cmd+K`)**: Keyboard-driven navigation allowing fast jumps across sections, projects, social profiles, and external links.
- 🛠️ **Featured Systems & Projects**:
  - **Distributed Task Queue & Job Scheduler**: Horizontal asynchronous task queue with Redis pub/sub, heartbeat monitoring, and exponential backoff retry policies.
  - **Real-Time Collaborative Code Editor**: Multi-user WebSocket conflict-free replicated data type (CRDT) document editor.
  - **AI-Powered Semantic Knowledge Base**: Vector database RAG pipeline with hybrid keyword + semantic search for documentation.
- 📊 **Architecture Diagrams**: Integrated interactive **Mermaid.js** system diagrams right within project showcases.
- ✍️ **Technical Writing & Blog**: Dedicated blog listing and article pages highlighting distributed systems, backend infrastructure, and data structures.
- 📈 **GitHub Activity & Open Source**: Direct integration showcasing contributions to JSON Schema (`json-schema-org`) standards.
- 📱 **Fully Responsive & Accessible**: Optimized across desktop, tablet, and mobile devices with fast page load times and semantic HTML structure.

---

## 🛠️ Tech Stack & Tools

- **Framework**: Next.js 15 (App Router, Server & Client Components)
- **UI & Styling**: React 19, Tailwind CSS, Lucide Icons
- **Diagramming**: Mermaid.js
- **Languages**: TypeScript, JavaScript (ES6+), Java, Python, SQL, C++
- **Tooling & Build**: Node.js, PostCSS, ESLint

---

## 📁 Repository Structure

```text
portfolio/
├── src/
│   ├── app/                  # Next.js App Router pages and layouts
│   │   ├── blog/             # Technical blog listing & dynamic article routes
│   │   ├── globals.css       # Design tokens & global CSS styles
│   │   ├── layout.tsx        # Root layout wrapper with metadata
│   │   └── page.tsx          # Main interactive portfolio landing page
│   ├── components/           # Reusable UI components & section layouts
│   │   ├── layout/           # Navbar, Footer, ScrollProgress
│   │   ├── sections/         # Hero, About, Skills, Projects, Experience, OpenSource, Achievements, Blog, Contact
│   │   ├── ui/               # Button, Card, Badge, Container, SectionHeading, MermaidDiagram
│   │   ├── CommandPalette.tsx # Global keyboard shortcut palette
│   │   └── GitHubGraph.tsx   # GitHub activity contribution visualizer
│   └── lib/                  # Utilities, blog posts data, constants
│       ├── blog.ts           # Technical blog articles content & helper functions
│       └── constants.ts      # Profile metadata, skills, project specs, & achievements
├── public/                   # Static assets & favicons
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.17 or later) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rithika016/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📦 Scripts

- `npm run dev` — Starts the local Next.js development server.
- `npm run build` — Builds the optimized production application.
- `npm run start` — Runs the built production server.
- `npm run lint` — Runs ESLint code quality checks.

---

## 👤 Author

**Rithika Lakshmi Padala**
- **GitHub**: [@Rithika016](https://github.com/Rithika016)
- **LinkedIn**: [Rithika Lakshmi Padala](https://linkedin.com/in/rithika-lakshmi-padala)
- **Email**: [padalaritikalakshmi@mictech.edu.in](mailto:padalaritikalakshmi@mictech.edu.in)

---

⭐ *If you like this project, feel free to give it a star on [GitHub](https://github.com/Rithika016/portfolio)!*
