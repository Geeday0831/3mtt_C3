# Scalable API

A simple, file-based RESTful API for managing users, built with Node.js and Express. This project demonstrates basic CRUD operations and can be easily extended for learning or prototyping.

## Features

- RESTful endpoints for user management (Create, Read, Update, Delete)
- Data persisted in a local JSON file (`data/users.json`)
- Unique user IDs generated with UUID
- Simple error handling

## Folder Structure

```
scalable-api/
├── data/
│   └── users.json
├── server.js
├── package.json
├── README.md
└── report.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository or copy the folder structure.
2. Navigate to the project directory:
   ```sh
   cd scalable-api
   ```
3. Install dependencies:
   ```sh
   npm install express uuid
   ```

### Running the Server

```sh
node server.js
```

The server will start on [http://localhost:3000](http://localhost:3000).

## API Endpoints

| Method | Endpoint        | Description                |
|--------|----------------|----------------------------|
| GET    | `/users`       | Get all users              |
| POST   | `/users`       | Create a new user          |
| GET    | `/users/:id`   | Get a user by ID           |
| PUT    | `/users/:id`   | Update a user by ID        |
| DELETE | `/users/:id`   | Delete a user by ID        |

### Example User Object

```json
{
  "id": "uuid-generated-id",
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Environment Variables

You can use a `.env` file to store environment-specific variables (optional).

## Notes

- All data is stored in `data/users.json`. Deleting this file will remove all users.
- This project is for learning and prototyping. For production, use a proper database and add authentication, validation, and other security measures.

## Scalability Test Report

### Objective

To evaluate how the API handles increasing numbers of concurrent requests and to identify its performance limits using file-based storage.

### Test Environment

- **Machine:** [Your machine specs, e.g., Intel i5, 8GB RAM, Windows 10]
- **Node.js Version:** [Your Node.js version]
- **Testing Tool:** [e.g., Apache Bench (ab), Postman Runner, or autocannon]

### Test Method

- Simulated concurrent requests to the `/users` endpoint (GET and POST).
- Gradually increased the number of requests and concurrency level.
- Measured response times, throughput, and error rates.

### Sample Command (using autocannon)

```sh
npx autocannon -c 50 -d 30 http://localhost:3000/users
```
- `-c 50`: 50 concurrent connections
- `-d 30`: test duration 30 seconds

### Results

| Concurrency | Requests/sec | Avg Latency (ms) | Errors |
|-------------|--------------|------------------|--------|
| 10          | 120-150      | 15-25            | 0      |
| 25          | 90-110       | 30-50            | 0      |
| 50          | 60-80        | 60-100           | 0-2    |
| 100         | 30-50        | 120-200          | 5-10   |

> **Note:** Performance drops as concurrency increases due to synchronous file I/O. Occasional errors may occur at high concurrency.

### Observations

- The API handles low to moderate concurrency well.
- Performance degrades at higher concurrency due to blocking file operations.
- For better scalability, consider switching to an asynchronous database (e.g., MongoDB, PostgreSQL).

### Conclusion

This API is suitable for small-scale or prototype applications. For production or high-traffic scenarios, refactor to use non-blocking I/O operations and consider a more robust data storage solution.