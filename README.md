# Nisaraistudio 🚀

## Description

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

*(Note: Many directories like `ai-router`, `analytics`, etc., contain only a `.keep` file, suggesting they are intended for future development or modularity.)*

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

## Footer 🦶

© 2026 Nisarai Studio. All rights reserved.

--- 

> **Like this project?** ⭐ Star | 🍴 Fork | ⬆️ Upvote | 📝 Issues

---

---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**