# 🚀 Next.js App with Azure DevOps CI/CD Pipeline


## 📘 Overview

This repository demonstrates the integration of a Next.js application with a Dockerized environment, automated builds, and deployments using Azure DevOps pipelines. The setup ensures consistent, repeatable, and scalable deployments, enhancing the development workflow.

## 🧩 Technologies Used

Next.js: A React framework for building server-side rendered applications.

Docker: Containerization platform to package applications and their dependencies.

Azure DevOps: CI/CD platform for automating build, test, and deployment pipelines.

Node.js: JavaScript runtime for building the application.

Nginx: Web server used to serve the Next.js application in production.

## 🛠️ Project Structure
```
/my-nextjs-app
├── .devcontainer/
│   └── devcontainer.json
├── .dockerignore
├── Dockerfile
├── azure-pipelines.yml
├── package.json
└── src/
    ├── components/
    ├── pages/
    └── styles/
```

## 🧪 Development Workflow

Local Development: Utilize Visual Studio Code's Remote - Containers extension for a consistent development environment.

Dockerization: The application is containerized using a Dockerfile to ensure consistency across different environments.

CI/CD Pipeline: An Azure DevOps pipeline automates the build, test, and deployment processes.

## 🔧 How the DevOps Pipeline Works 🛠️

Our pipeline automates these key steps:

1. ⚙️ **Install Dependencies**  
   - The pipeline installs Node.js and all necessary project dependencies.

2. 🏗️ **Build the Next.js Application**  
   - It compiles the app for production to optimize performance.

3. 📦 **Build Docker Image**  
   - Creates a Docker image tagged with the build ID to ensure versioning.

4. 🚀 **Deploy Docker Container**  
   - Stops and removes any existing container with the same name.  
   - Runs a new container exposing port 3000 to serve the application.

This automation ensures your app is always deployed fresh, consistent, and scalable. 🔄

---

## 🐳⚙️ How to Run Locally with Docker 🖥️

To test the app locally, simply run:

```bash
docker build -t nextjs-app .
docker run -d -p 3000:3000 nextjs-app
🌐 Open your browser at http://localhost:3000 to see the app running.

```

## 📸 Pipeline Execution


Example of a successful pipeline run.

## 🚀 Deployment Process

Code Commit: Changes pushed to the main branch trigger the pipeline.

Build: The pipeline installs dependencies and builds the Next.js application.

Docker Image Build: A Docker image is created from the application.

Container Deployment: The existing container is stopped and removed, and a new container is started with the updated image.

## 🔄 Continuous Integration & Deployment

Continuous Integration (CI): Automates the process of integrating code changes from multiple contributors into a shared repository.

Continuous Deployment (CD): Automates the release of new application versions to production, ensuring quick and reliable delivery.
