# Task Manager

## Description

This is a Task Manager application built with Node.js and Express. The project implements a RESTful API for managing tasks, while the front-end interface is pre-built and ready to use. Users can create, read, update, and delete tasks through the API, and interact with the application via the provided web interface.

## Features

- Create new tasks
- View all tasks
- View individual tasks by ID
- Update existing tasks
- Delete tasks
- Mark tasks as completed or incomplete

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Environment**: dotenv for configuration
- **Development**: nodemon for auto-restart

## Environment Variables

The application uses the following environment variables:

- `Mongo_URL`: The MongoDB connection string. Required for database connectivity.

Create a `.env` file in the root directory and set the variables accordingly.

1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   Mongo_URL=mongodb://localhost:27017/taskmanager
   ```
   Replace with your actual MongoDB URL.
4. Start the server:
   ```
   npm start
   ```
   The server will run on port 3000.

## API Endpoints

All endpoints are prefixed with `/api/v1/tasks`.

- **GET /api/v1/tasks**: Retrieve all tasks
- **POST /api/v1/tasks**: Create a new task
  - Body: `{ "name": "Task Name" }`
- **GET /api/v1/tasks/:id**: Retrieve a single task by ID
- **PATCH /api/v1/tasks/:id**: Update a task by ID
  - Body: `{ "name": "Updated Name", "completed": true }`
- **DELETE /api/v1/tasks/:id**: Delete a task by ID

## Front-end

The front-end is pre-built and located in the `public` folder. It provides a user interface to interact with the API. Once the server is running, you can access the application at `http://localhost:3000`.
