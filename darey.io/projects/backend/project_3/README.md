# User Management API

A simple RESTful API built with Node.js, Express, and PostgreSQL for managing users. This project demonstrates modular routing, controller logic, and database integration using the `pg` library.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [Notes](#notes)
- [License](#license)

---

## Features

- CRUD operations for users (Create, Read, Update, Delete)
- PostgreSQL database integration
- Modular structure (routes, controllers, config)
- Environment variable support with `.env`
- Proper error handling and status codes

---

## Project Structure

```
backend/project_3/
├── config/
│   └── db.js               # PostgreSQL connection setup
├── controllers/
│   └── userController.js   # User CRUD logic
├── routes/
│   └── userRoutes.js       # Express routes for users
├── app.js                  # Express app setup
├── server.js               # Server entry point
├── .env                    # Environment variables
└── README.md               # Project documentation
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/) running locally or remotely

### Installation

1. Clone this repository and navigate to the project directory:
   ```sh
   cd backend/project_3
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your PostgreSQL database and create a `users` table:
   ```sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(100) NOT NULL UNIQUE,
     age INTEGER
   );
   ```
4. Create a `.env` file in the root of the project with the following content:
   ```
   PORT=5000
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_DATABASE=your_db_name
   ```

### Running the Server

```sh
node server.js
```
or, for development with auto-reload:
```sh
npx nodemon server.js
```

The server will start on [http://localhost:5000](http://localhost:5000).

---

## API Endpoints

| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| GET    | `/users`       | Get all users           |
| GET    | `/users/:id`   | Get a user by ID        |
| POST   | `/users`       | Create a new user       |
| PUT    | `/users/:id`   | Update a user by ID     |
| DELETE | `/users/:id`   | Delete a user by ID     |

### Example User Object

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}
```

---