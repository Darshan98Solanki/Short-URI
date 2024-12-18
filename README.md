---

# Short URI Project - <a href="https://short-uri-q5yh.vercel.app" target="_blank">Live</a>

## Project Overview
This project is a full-stack application designed to shorten URLs, with a backend built using Node.js and a frontend developed using modern web technologies. The backend handles the logic for URL shortening, while the frontend offers a clean, user-friendly interface.

## Features
- **URL Shortening**: Users can input a long URL, and the system will generate a shortened URL.
- **User-friendly Interface**: A simple and responsive frontend that allows users to interact seamlessly.
- **Database Integration**: Backend connects to a database for storing and retrieving shortened URLs.

## Project Structure

### Backend (`/backend`)
The backend is powered by Node.js and handles all API requests related to URL shortening. It includes:
- `index.js`: Main entry point for the backend.
- `getConnection.js`: Handles database connections.
- `types.js`: Defines the types used in the project.
- `package.json`: Lists the dependencies and scripts for the backend.

### Frontend (`/frontend`)
The frontend is built using modern web technologies, offering a smooth interface for users to input URLs and receive shortened links.
- `index.html`: The main HTML file for the application.
- `src/`: Contains the source code for the frontend, including React components (if applicable).
- `public/`: Public assets such as images, icons, etc.
- `vite.config.js`: Configuration for Vite, a fast front-end build tool.

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14+)
- A package manager like `npm` or `yarn`

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the backend server:
   ```bash
   nodemon index.js
   ```
   The backend should now be running on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend should now be running on `http://localhost:3000`.

## Usage
1. Open the frontend in your browser and input a long URL that you want to shorten.
2. The frontend will communicate with the backend, which processes the URL and returns a shortened version.
3. The shortened URL is displayed on the frontend for user interaction.

## Tech Stack
- **Frontend**: HTML, CSS, React, Vite for building
- **Backend**: Node.js, Express, Database
- **Build Tools**: Vite for frontend, npm for backend

## Future Enhancements
- Add user authentication to keep track of individual users' shortened URLs.
- Include analytics for each shortened URL, such as click count and geographical data.
- Implement custom short URLs.

---
