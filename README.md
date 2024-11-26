Blog Platform - Backend
Description
This is the backend for the Blog Platform application, built with Node.js and Express. It provides a RESTful API for user authentication, blog post creation, and retrieval. It uses MongoDB as the database and JWT for user authentication.

Setup Instructions
1. Clone the Repository
Clone the repository to your local machine using: git clone https://github.com/your-username/backend-repository.git

Change the directory to the cloned repository:
cd backend-repository

2. Install Dependencies
Install the required dependencies with:
npm install

PORT: The port number on which the server will run 5000.
MONGO_URI: Your MongoDB connection string.
JWT_SECRET: A secret key for generating JWT tokens.
4. Run the Application
To start the backend server in production mode:
npm start

For development mode with live reload using nodemon:
npm run dev

The server will run on http://localhost:5000 by default, or the port you specified in the .env file.

Project Structure
config/
Contains database configuration files.

middlewares/
Contains middleware for JWT-based authentication.

routes/
Defines API endpoints for authentication and post management.

index.js
The main entry point for the backend server.

Features
User Authentication:

Secure signup and login functionality.
Passwords hashed with bcrypt.
JWT tokens issued for authentication.
Blog Management:

Create, read, and retrieve blog posts.
Filter posts by author.
Middleware:

JWT-based middleware protects sensitive routes.
API Endpoints
Authentication
POST /signup: Registers a new user.
POST /login: Authenticates a user and returns a JWT token.
Blog Posts
POST /posts/post: Creates a new blog post (authentication required).
GET /posts: Retrieves all blog posts.
GET /posts?author=userId: Retrieves blog posts by a specific author.
Running the Application
Make sure MongoDB is running locally or provide a connection string in MONGO_URI.
Start the server using the commands mentioned in the Setup Instructions.
Test the API endpoints using tools like Postman or cURL.
Common Commands
Start Server:
npm start
Development Mode:
npm run dev
Install Dependencies:
npm install
Key Technologies Used
Node.js and Express for the server.
MongoDB with Mongoose for database operations.
JWT for authentication.
bcrypt for password hashing.
