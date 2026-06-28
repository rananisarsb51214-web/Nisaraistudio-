# Nisaraistudio 🚀

## Description

Nisaraistudio is a Full Stack AI Website Builder and Development Agent. It is designed to autonomously design, build, improve, maintain, and deploy production-grade websites and web applications. Leveraging AI capabilities, it acts as a comprehensive engineering team, covering roles from Senior Software Engineer and UI/UX Designer to Product Manager and DevOps Engineer. The project aims to automate the entire web development lifecycle, from initial concept to deployment and continuous improvement.

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

- **Autonomous Website Building:** Automatically designs, builds, and deploys websites and web applications based on user goals.
- **AI Agent Capabilities:** Operates as an autonomous engineering team, including roles like Senior Software Engineer, UI/UX Designer, Product Manager, and DevOps Engineer.
- **Full Stack Development:** Supports a wide range of frontend and backend technologies.
- **AI Provider Integration:** Compatible with multiple AI providers like Gemini, Claude, and OpenAI, with automatic fallback and retry mechanisms.
- **Browser Automation:** Includes compatibility with tools like Playwright and Puppeteer for automated browser interactions.
- **Evolution Engine:** Continuously improves projects by detecting outdated code, refactoring, upgrading dependencies, and optimizing for performance, SEO, and accessibility.
- **Memory Engine:** Maintains project memory to reuse previous decisions and maintain consistency.
- **Template Engine:** Generates professional templates for various industries and styles.
- **E-commerce & Marketplace Features:** Built-in capabilities for e-commerce and marketplace functionalities.
- **Live Preview:** Generates responsive layouts for desktop, tablet, and mobile, including dark and light modes.
- **Production-Ready Code:** Focuses on generating reusable, modular, secure, scalable, maintainable, typed, and documented code.

## Tech Stack 🛠️

- **Languages:** TypeScript, HTML, CSS, JSON
- **Frameworks/Libraries:** React, Vite, Tailwind CSS, motion (Framer Motion), lucide-react, @google/genai, @vercel/analytics
- **Build Tools:** Vite
- **Styling:** Tailwind CSS, CSS
- **UI Components:** lucide-react, motion (for animations)
- **Deployment:** Vite (local preview), implies compatibility with Vercel, Netlify, etc. (from existing README.md)

## Installation ⬇️

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rananisarsb51214-web/Nisaraistudio-
   cd Nisaraistudio-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your API keys, for example:
   ```
   GEMINI_GEMINI_API_KEY=your_gemini_api_key
   ```
   *(Note: The `vite.config.ts` suggests `GEMINI_GEMINI_API_KEY` is used for the Google AI Studio integration.)*

## Usage 💡

This project serves as a foundation for an AI-powered website builder. The current implementation showcases a portfolio website with animated elements and a contact form.

### Running the Development Server

To start the development server and view the current implementation:

1. Ensure you have Node.js and npm/yarn installed.
2. Install dependencies (see Installation section).
3. Run the development script:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be accessible at `http://localhost:3000` (as specified in `package.json`).

### Core Functionality (as per project's stated purpose):

To utilize Nisaraistudio as a full-stack AI website builder:

1. **Define Your Goal:** Provide a clear prompt or description of the website you want to build.
2. **Autonomous Execution:** The AI agent will understand requirements, create an execution plan, generate architecture, write production code, review, fix bugs, and optimize.
3. **Iterative Development:** The process continues automatically until the project is complete, with the AI continuously determining the next logical task.

## How to Use 🧑‍💻

The current codebase provides a functional frontend portfolio website. You can interact with it as follows:

- **Explore Portfolio:** Click the "Explore Portfolio" button to view the featured projects.
- **View Project Details:** Clicking on a portfolio card will open an animated modal displaying the full description, technologies used, and a link to the project (currently set to '#').
- **Contact Me:** Click the "Contact Me" button to open a modal with a contact form. Submitting the form will trigger a simple alert and close the modal.

This serves as a demonstration of the UI/UX capabilities and animation integration (using `motion` and `AnimatePresence`). The broader AI Website Builder functionality is described in the repository's README.md but not fully implemented in the provided code snippets.

## Project Structure 📂

```
Nisaraistudio-
├── node_modules/
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── docs/
│   ├── .keep
│   └── sprint_1.md
├── ai-router/
│   └── .keep
├── analytics/
│   └── .keep
├── api/
│   └── .keep
├── apps/
│   └── .keep
├── automation/
│   └── .keep
├── bash
├── billing/
│   └── .keep
├── cli/
│   └── .keep
├── infra/
│   └── .keep
├── templates/
│   └── .keep
├── .env  (example, not present in analysis)
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

*(Note: Some directories like `ai-router`, `analytics`, `api`, etc., contain only a `.keep` file, indicating they are placeholders or intended for future use.)*

## Contributing 🤝

Contributions are welcome! Please follow these guidelines:

1.  **Fork the Repository:** Create a fork of the `Nisaraistudio-` repository.
2.  **Create a New Branch:** Make your changes in a new branch (`git checkout -b feature/your-feature-name`).
3.  **Commit Your Changes:** Add and commit your changes (`git commit -m 'Add some feature'`).
4.  **Push to the Branch:** Push your changes to your branch (`git push origin feature/your-feature-name`).
5.  **Open a Pull Request:** Submit a pull request to the main branch of the original repository.

## License 📄

No license information was found in the repository metadata. It is recommended to add a `LICENSE` file to the repository.

## Important links 🔗

- **Live Demo:** *(Not explicitly provided in the analysis. If available, add link here.)*
- **Author's Profile:** *(Not explicitly provided in the analysis. If available, add link here.)*
- **Google AI Studio:** The project is optimized for Google AI Studio (Gemini).

## Footer 🦶

© 2026 Nisarai Studio. All rights reserved.

**Repository:** [Nisaraistudio-](https://github.com/rananisarsb51214-web/Nisaraistudio-)

**Author:** Muhammed Nisar

--- 

> **Like this project?** ⭐ Star | 🍴 Fork | ⬆️ Upvote | 📝 Issues


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**