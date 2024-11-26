Blog Platform - Frontend
Description
This is the frontend for the Blog Platform application, built with Next.js (TypeScript) and styled using Tailwind CSS. It serves as the user interface for interacting with the blog platform, enabling users to view, create, and manage blog posts, and handle user authentication.

##Setup Instructions
1. Clone the Repository
Clone the repository to your local machine:
git clone https://github.com/your-username/frontend-repository.git

Navigate into the project directory:
cd frontend-repository

2. Install Dependencies
Install all required dependencies using:
npm install

NEXT_PUBLIC_API_URL: The base URL of your backend API (e.g., http://localhost:5000).
4. Run the Application
To start the development server:
npm run dev

The app will run on http://localhost:3000 by default.

To build the application for production:
npm run build

To serve the production build:
npm run start

Project Structure
components/
Reusable UI components such as Navbar, PostCard, and CreatePostForm.

pages/
Next.js page components, including:

index.tsx: The homepage displaying all blog posts.
login.tsx: The login page for user authentication.
signup.tsx: The signup page for new user registration.
dashboard.tsx: A protected page for managing user-specific blog posts.
styles/
Contains global styles and Tailwind CSS configuration.

public/
Static assets like images, icons, and logos.

Features
Responsive Design:

Optimized for desktop, tablet, and mobile devices using Tailwind CSS.
Authentication:

User login and signup with client-side validation.
Stores JWT tokens securely in the browser for API requests.
Blog Management:

View all posts on the homepage.
Create and view personal posts in the dashboard.
Dynamic Routing:

Handles dynamic routes for individual blog posts.
Available Pages and Routes
Public Routes
/: Homepage displaying all blog posts.
/login: Login page for user authentication.
/signup: Signup page for new user registration.
Protected Routes
/dashboard: User-specific dashboard for managing posts (authentication required).
Commands
Development
To start the development server:
npm run dev

Production
To build the app for production:
npm run build

To serve the production build:
npm run start

Linting
To check and fix linting issues:
npm run lint

Key Technologies Used
Next.js: Framework for React applications with server-side rendering and static site generation.
TypeScript: For type-safe development.
Tailwind CSS: For responsive and utility-first styling.
Axios: For API requests to the backend.


