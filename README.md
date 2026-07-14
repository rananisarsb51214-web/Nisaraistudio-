# Nisaraistudio 

Nisaraistudio- is a React-based portfolio website demonstrating dynamic UI elements and interactive components, built with Vite, Tailwind CSS, and Framer Motion. While the repository's description points towards a broader AI Website Builder and Development Agent, the current codebase focuses on a functional frontend portfolio showcasing interactive elements like an animated modal for project details and a contact form.

## Table of Contents

- [Project Title & Badges](#project-title--badges)
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Important links](#important-links)
- [Footer](#footer)

## Features ✨

- **Interactive Portfolio Display:** Showcases a list of portfolio items with descriptive titles and short descriptions.
- **Animated Project Modals:** Clicking on a portfolio item opens a modal with detailed information, including full description and technologies used, enhanced with Framer Motion animations.
- **Animated Contact Form Modal:** A dedicated modal for users to submit contact information, also featuring smooth animations.
- **Dynamic UI Elements:** Utilizes `lucide-react` for icons and `motion` from Framer Motion for engaging animations.
- **Responsive Design:** Built with Tailwind CSS, ensuring the application is responsive across different devices.
- **Vercel Analytics Integration:** Includes `@vercel/analytics` for tracking user engagement.

## Tech Stack 🛠️

- **Languages:** TypeScript, HTML, CSS
- **Frameworks/Libraries:**
    - **React:** Core UI library (`react`, `react-dom`)
    - **Vite:** Build tool and development server (`vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`)
    - **Tailwind CSS:** Utility-first CSS framework (`tailwindcss`, `autoprefixer`)
    - **Framer Motion:** Animation library (`motion`)
    - **Lucide React:** Icon library (`lucide-react`)
    - **Vercel Analytics:** Performance monitoring (`@vercel/analytics`)
- **AI Integration (Stated Purpose):** `@google/genai` (though not actively used in the current frontend implementation).
- **Backend (Stated Purpose):** `express` (though not actively used in the current frontend implementation).

## Installation ⬇️

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rananisarsb51214-web/Nisaraistudio-
    cd Nisaraistudio-
    ```

2.  **Install dependencies:**
    The project uses npm and Vite. Ensure you have Node.js installed.
    ```bash
    npm install
    ```

3.  **Set up environment variables (Optional for local development):**
    The project utilizes `dotenv`. If you need to configure environment-specific variables (like API keys for Google AI, as suggested by `vite.config.ts`), create a `.env` file in the root directory:
    ```
    GEMINI_GEMINI_API_KEY=your_gemini_api_key
    ```

## Usage 💡

This project serves as a demonstration of a modern React frontend with advanced UI/UX features.

### Running the Development Server

To start the development server and view the portfolio website:

1.  Ensure you have Node.js and npm installed.
2.  Follow the **Installation** steps above.
3.  Run the development script:
    ```bash
    npm run dev
    ```

The application will be accessible at `http://localhost:3000` (as configured in `package.json`).

### Interacting with the Portfolio

-   **Explore Portfolio:** Click the "Explore Portfolio" button on the main page.
-   **View Project Details:** Click on any portfolio card to open an animated modal that displays the full project description, the technologies used, and a link (currently set to '#') to the project.
-   **Contact Me:** Click the "Contact Me" button to open a modal with a contact form. Submitting the form will trigger a simple JavaScript alert and close the modal.

## How to Use 🧑‍💻

The current codebase provides a functional frontend portfolio website that demonstrates the capabilities of React, Tailwind CSS, and Framer Motion for creating engaging user interfaces.

-   **Portfolio Exploration:** Navigate through the project cards to see how details are presented in an animated modal.
-   **Contact Form Interaction:** Test the contact form submission (which currently shows an alert).
-   **Animation Showcase:** Observe the smooth transitions and animations in modals using `motion` and `AnimatePresence`.

This serves as a foundation that could be extended. The broader vision of Nisaraistudio as an AI Website Builder is described in the repository's documentation but is not fully implemented in this frontend-focused code.

## Project Structure 📂

```
Nisaraistudio-
├── node_modules/
├── public/
├── src/
│   ├── App.tsx             # Main application component with portfolio and modals
│   ├── index.css           # Global CSS with Tailwind imports
│   └── main.tsx            # Entry point for React application
├── docs/
│   ├── .keep               # Placeholder directory
│   └── sprint_1.md         # Documentation file
├── ai-router/              # Placeholder directory
├── analytics/              # Placeholder directory
├── api/                    # Placeholder directory
├── apps/                   # Placeholder directory
├── automation/             # Placeholder directory
├── bash/
├── billing/                # Placeholder directory
├── cli/                    # Placeholder directory
├── infra/                  # Placeholder directory
├── templates/              # Placeholder directory
├── .env                    # Environment variables (example, not analyzed)
├── .gitignore
├── index.html              # HTML entry point for Vite
├── metadata.json           # Project metadata
├── package.json            # Project dependencies and scripts
├── README.md               # Project README file
└── vite.config.ts          # Vite build tool configuration
```

*(Note: Many directories like `ai-router`, `analytics`, etc., contain only a `.keep` file, suggesting they are intended for future development or modularity.)*You are a senior software architect and full‑stack developer. Build a complete, production‑ready system for "Nisar AI Studio – Website & Engagement Builder" with the following specifications:

**OVERALL SYSTEM:**
- A platform where users can:
  1. Build websites (drag‑and‑drop or AI‑generated) using a visual editor.
  2. Create engagement tools (quizzes, polls, forms, surveys, interactive content).
  3. Launch full‑stack applications (e.g., SaaS, e‑commerce, dashboards) with one click.
  4. Deploy to multiple platforms (web, mobile, social media pages like Facebook/Instagram).
  5. Manage all content with a memory agent (saves pages, user preferences, project states).
  6. Integrate Google Gemini AI for content generation, copywriting, and design suggestions.
  7. Include a social media marketing page (post scheduler, analytics, engagement tracking).
  8. Monetize via Stripe subscriptions and usage‑based billing.
  9. Use a real‑time database (e.g., Supabase or Firebase) for live collaboration and instant updates.
  10. Ensure all UI components are fully responsive, active, and functional with real‑time sync.

**TECHNICAL ARCHITECTURE (Microservices + Event‑Driven):**
- Frontend: Next.js (React) + Tailwind CSS + Shadcn UI.
- Backend: Node.js + TypeScript microservices, each with its own PostgreSQL database (or use a shared DB with schema isolation).
- Realtime: Supabase Realtime or Firebase Firestore for live updates.
- AI: Google Gemini API (via AI Gateway).
- Memory: A dedicated Memory Service that stores user sessions, page versions, and agent states (using pgvector for embeddings).
- Deployment Agent: Kubernetes/Cloud Run deployment engine that can spin up preview URLs and production environments.
- Social Media: Integrate with Facebook Graph API, Instagram Basic Display, Twitter API, LinkedIn API for posting and analytics.
- Monetization: Stripe Checkout, subscription management, usage tracking (credits).
- Orchestration: Use BullMQ (Redis) for async tasks (AI generation, deployment, social scheduling).
- Observability: Prometheus + Grafana, OpenTelemetry tracing, structured logging.

**COMPONENTS TO GENERATE (each as a separate microservice with its own Helm chart and Dockerfile):**

1. **Builder Service** – CRUD for websites, pages, components; handles drag‑and‑drop state; triggers AI suggestions via Gemini.
2. **Engagement Service** – Manages quizzes, polls, forms, surveys; stores responses; provides analytics.
3. **Deployment Agent** – Takes a built project, generates build artifacts, deploys to Vercel, Netlify, or Kubernetes preview environments; exposes preview URLs.
4. **Memory Service** – Saves all user sessions, page versions, and agent contexts; supports embedding search (pgvector) for retrieving past decisions.
5. **Social Media Service** – Connects to social platforms; schedules posts; aggregates engagement metrics.
6. **AI Gateway (existing)** – Enhanced to route to Gemini and other models for content generation.
7. **Billing Service (existing)** – Extended with usage‑based pricing and credit tracking.
8. **Realtime Sync Service** – WebSocket / Supabase Realtime integration for collaborative editing.

**DELIVERY REQUIREMENTS:**
- Provide **full source code** for all services (Node.js + TypeScript).
- Provide **Dockerfiles** and **Helm charts** (using the nisar‑common library).
- Provide **umbrella chart values.yaml** integration.
- Provide **migration scripts** for each database.
- Provide **test scripts** for each API endpoint.
- Provide a **README** with local development setup and deployment instructions.

**FOCUS ON:**
- Security: JWT authentication, RBAC, API keys.
- Scalability: horizontal scaling via HPA and KEDA (queue‑based).
- Real‑time: WebSocket or Server‑Sent Events for live updates.
- Responsiveness: all frontend components must be mobile‑first.
- Active: real‑time collaboration (like Google Docs) using Yjs or CRDTs.

**OUTPUT FORMAT:**
- Full directory structure for each service.
- Complete code for every file (server.ts, routes, handlers, models, clients, workers, etc.).
- Complete Helm charts with templates and values.
- Umbrella chart integration snippet.
- A detailed README covering all services and how to run them.

**Assumptions:**
- Redis, PostgreSQL, and MinIO are already deployed in the cluster.
- AI Gateway and Notification Service already exist.
- Use environment variables for all configuration.

Generate everything now.
Component Description
Builder Service Visual website builder with component library, drag‑and‑drop state, AI‑assisted design.
Engagement Service Create quizzes, polls, surveys with real‑time response collection.
Deployment Agent One‑click deploy to multiple platforms (Vercel, Netlify, Cloud Run) with preview URLs.
Memory Service Persistent memory across sessions, saves pages, user preferences, agent decisions (with pgvector).
Social Media Service Post scheduler, analytics dashboard, cross‑platform publishing.
Realtime Sync WebSocket + Supabase Realtime for collaborative editing.
Billing (extended) Stripe subscriptions + usage‑based credits (pay‑per‑API‑call).
Frontend Next.js app with Shadcn UI, fully responsive, real‑time collaboration.helm upgrade --install nisar-platform ./nisar-platform --set builder.enabled=true --set engagement.enabled=true --set deploymentAgent.enabled=true --set memoryService.enabled=true --set socialMedia.enabled=true
## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  **Fork the Repository:** Create a fork of the `Nisaraistudio-` repository.
2.  **Clone Your Fork:** Clone your forked repository to your local machine.
3.  **Create a New Branch:** Start a new branch for your feature or fix (`git checkout -b feature/your-feature-name`).
4.  **Make Your Changes:** Implement your contributions.
5.  **Commit Changes:** Add and commit your changes (`git commit -m 'Add your descriptive commit message'`).
6.  **Push to Your Fork:** Push your branch to your fork on GitHub (`git push origin feature/your-feature-name`).
7.  **Open a Pull Request:** Submit a pull request to the `main` branch of the original `Nisaraistudio-` repository.

## License 📄

No explicit license information was found in the repository's metadata or configuration files. It is recommended to add a `LICENSE` file to the repository to clarify usage and distribution terms.

## Important links 🔗

-   **Repository:** [Nisaraistudio-](https://github.com/rananisarsb51214-web/Nisaraistudio-)
-   **Author:** Muhammed Nisar
-   **Google AI Studio:** The project is configured to integrate with Google AI Studio (Gemini), as indicated by `vite.config.ts`.

## Footer 🦶🚀 NISAR AI Studio

<div align="center">The Ultimate AI Website Builder, Full-Stack Development Platform & Super AI Toolbox

Build websites, SaaS applications, AI agents, automation workflows, engagement tools, and deploy production-ready applications using AI.

"License" (https://img.shields.io/badge/License-MIT-blue.svg)
"React" (https://img.shields.io/badge/React-19-blue)
"Next.js" (https://img.shields.io/badge/Next.js-Latest-black)
"TypeScript" (https://img.shields.io/badge/TypeScript-5.x-blue)
"Supabase" (https://img.shields.io/badge/Supabase-Backend-green)
"Google Gemini" (https://img.shields.io/badge/Google-Gemini-orange)
"Docker" (https://img.shields.io/badge/Docker-Ready-blue)
"Kubernetes" (https://img.shields.io/badge/Kubernetes-Ready-326CE5)

</div>---

🌍 Overview

NISAR AI Studio is a production-ready AI development platform that combines website building, AI-assisted software engineering, engagement tools, automation, memory, real-time collaboration, and one-click deployment into a unified workspace.

Whether you're building a landing page, SaaS platform, e-commerce store, AI application, or enterprise dashboard, NISAR AI Studio provides an AI-powered development experience from idea to deployment.

---

✨ Core Features

🤖 AI Website Builder

- AI-generated websites
- Drag-and-drop editor
- Responsive layouts
- Landing pages
- Portfolio websites
- Business websites
- SaaS websites
- E-commerce stores
- Blogs
- Dashboards
- Admin panels

---

💻 Full-Stack Developer

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Node.js
- Express
- PostgreSQL
- Supabase
- REST APIs
- Realtime APIs
- Authentication
- Role-based access
- File storage

---

🧠 Super AI Toolbox

- AI Chat
- Prompt Library
- Prompt Templates
- AI Code Generator
- AI Debugger
- AI Refactoring
- AI Documentation
- AI Website Generator
- AI Copywriting
- AI SEO
- AI Translation
- AI Summarization
- AI Image Generation
- AI Design Suggestions

---

🎯 Engagement Builder

Create interactive content including:

- Quizzes
- Polls
- Surveys
- Contact Forms
- Lead Generation Forms
- Booking Forms
- Feedback Forms
- Interactive Landing Pages
- Gamification
- Analytics Dashboard

---

📱 Social Media Automation

- Facebook Publishing
- Instagram Publishing
- LinkedIn Publishing
- X (Twitter) Publishing
- Content Calendar
- AI Caption Generator
- Hashtag Generator
- Engagement Analytics
- Performance Reports

---

⚡ AI Agents

- Planner Agent
- Architect Agent
- Frontend Agent
- Backend Agent
- Database Agent
- UI/UX Agent
- DevOps Agent
- Security Agent
- Documentation Agent
- Testing Agent

---

🧠 Memory Engine

Persistent AI memory for:

- User preferences
- Project history
- Prompt history
- Agent memory
- Page versions
- Context retrieval
- Vector search
- Semantic search

---

🚀 Deployment

Deploy with one click to:

- Vercel
- Docker
- Kubernetes
- Google Cloud
- Azure
- AWS
- Cloudflare

---

📊 Analytics

- User Analytics
- Website Analytics
- AI Usage
- API Usage
- Billing
- Team Activity
- Performance Monitoring

---

🏗 Technology Stack

Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion

Backend

- Node.js
- Express
- TypeScript
- Supabase
- PostgreSQL
- Redis

AI

- Google Gemini
- OpenAI Compatible APIs
- AI Gateway

Infrastructure

- Docker
- Kubernetes
- Helm
- MinIO
- BullMQ
- Prometheus
- Grafana
- OpenTelemetry

---

📂 Project Structure

apps/
services/
builder/
engagement/
memory/
deployment-agent/
social-media/
billing/
ai-gateway/
frontend/
packages/
shared/
database/
docs/
scripts/
docker/
helm/
.github/

---

🔒 Security

- JWT Authentication
- OAuth Login
- Google Login
- GitHub Login
- Magic Link
- Email OTP
- Role-Based Access Control
- API Keys
- Rate Limiting
- Audit Logs
- Encryption
- Secure File Uploads

---

📦 Installation

git clone https://github.com/your-username/nisar-ai-studio.git

cd nisar-ai-studio

npm install

npm run dev

---

⚙ Environment Variables

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

DATABASE_URL=

REDIS_URL=

GEMINI_API_KEY=

OPENAI_API_KEY=

STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=

JWT_SECRET=

---

🚀 Deployment

Docker

docker compose up -d

Kubernetes

helm upgrade --install nisar-platform ./nisar-platform

---

🛣 Roadmap

- AI Website Builder
- AI Software Generator
- Mobile App Builder
- AI CRM Builder
- AI Automation Builder
- AI Workflow Builder
- AI Marketplace
- Plugin Ecosystem
- Multi-Agent Collaboration
- Enterprise Edition

---

🤝 Contributing

We welcome contributions from developers around the world.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

📄 License

MIT License

---

🌐 Vision

Our mission is to create the most powerful open-source AI development platform, enabling anyone to build websites, applications, automations, and AI-powered products from a single intelligent workspace.

---

⭐ Support

If you find this project useful:

- ⭐ Star the repository
- 🍴 Fork the project
- 🐛 Report issues
- 💡 Submit feature requests
- 🤝 Contribute code

Together, let's build the future of AI-powered software development.

Made with ❤️ by the NISAR AI Studio Community

© 2026 Nisarai Studio. All rights reserved.


