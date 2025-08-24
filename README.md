# Fluxara Website

This is the official marketing and informational website for Fluxara. It is a modern, responsive web application built with Vite, React, TypeScript, and Tailwind CSS.

## Getting Started

Follow these instructions to set up the project for local development.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher is recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ethiraj-fluxara/fluxara_website.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd fluxara_website
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

## Local Development

To run the website on a local development server with hot-reloading, use the following command:

```bash
npm run dev
```

This will start the server, typically on `http://localhost:8080`. You can now open this URL in your browser to see the website. Any changes you make to the source code will be reflected instantly.

## Deployment to GitHub Pages

This project is configured for continuous deployment to GitHub Pages whenever changes are pushed to the `main` branch.

### How It Works

1.  **Push to `main`:** When a commit is pushed to the `main` branch, it automatically triggers the GitHub Actions workflow defined in `.github/workflows/jekyll-gh-pages.yml`.

2.  **Build Process:** The workflow builds the application for production using `npm run build`. This creates a `dist` directory with all the necessary static files (HTML, CSS, JavaScript).

3.  **Deployment:** The workflow then deploys the contents of the `dist` directory to the `gh-pages` branch, which is the source for the GitHub Pages site.

### Important Configuration Files

-   **`.github/workflows/jekyll-gh-pages.yml`**: Defines the CI/CD pipeline for building and deploying the site.
-   **`vite.config.ts`**: Contains the Vite configuration. The `base` property is set to `'/'` to support the custom domain.
-   **`public/CNAME`**: This file contains the custom domain (`fluxara.ai`) and is essential for GitHub Pages to route traffic correctly.
-   **`public/.nojekyll`**: This empty file tells GitHub Pages to not use its default Jekyll build process, which is crucial for single-page applications like this one.

### Making Changes

1.  Make your desired code changes locally.
2.  Commit and push the changes to the `main` branch.
3.  The GitHub Actions workflow will handle the rest. Monitor the deployment progress in the "Actions" tab of the repository.