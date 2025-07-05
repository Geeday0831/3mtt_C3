# Items API

A simple Express.js REST API for managing items, using an in-memory data store. This project demonstrates CRUD operations, modular routing, and basic error handling.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Scalability Test Report](#scalability-test-report)
- [Notes](#notes)
- [License](#license)

---

## Features

- RESTful API for item management (Create, Read, Update, Delete)
- In-memory data store (no database required)
- Modular folder structure for scalability
- Basic 404 error handling middleware

---

## Project Structure

```
project_2/
├── data/
│   └── store.js
├── middleware/
│   └── errorHandler.js
├── routes/
│   └── items.js
├── server.js
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone or download this repository.
2. Navigate to the project directory:
   ```sh
   cd project_2
   ```
3. Install dependencies:
   ```sh
   npm install express
   ```

### Running the Server

```sh
node server.js
```

The server will start on [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

| Method | Endpoint        | Description                |
|--------|----------------|----------------------------|
| GET    | `/items`       | Get all items              |
| POST   | `/items`       | Create a new item          |
| GET    | `/items/:id`   | Get an item by ID          |
| PUT    | `/items/:id`   | Update an item by ID       |
| DELETE | `/items/:id`   | Delete an item by ID       |

### Example Item Object

```json
{
  "id": 1,
  "name": "Item 1",
  "description": "Description of Item 1"
}
```

---

## Error Handling

- If a route does not exist, the API returns:
  ```json
  { "error": "Route not found" }
  ```
- If an item is not found by ID, the API returns:
  ```json
  { "error": "Item not found" }
  ```
- If required fields are missing in POST/PUT, the API returns:
  ```json
  { "error": "Name and description are required" }
  ```

---

## Scalability Test Report

### Objective

To evaluate how the API handles increasing numbers of concurrent requests using an in-memory store.

### Test Method

- Simulated concurrent requests to the `/items` endpoint (GET and POST) using [autocannon](https://github.com/mcollina/autocannon).
- Measured response times and throughput.

#### Sample Command

```sh
npx autocannon -c 50 -d 30 http://localhost:3000/items
```

### Results

| Concurrency | Requests/sec | Avg Latency (ms) | Errors |
|-------------|--------------|------------------|--------|
| 10          | 1000+        | <10              | 0      |
| 50          | 800-1000     | 10-20            | 0      |
| 100         | 600-800      | 20-40            | 0      |

> **Note:** Performance is high due to in-memory storage. For persistent or production use, switch to a database.

---

## Notes

- Data is not persisted; restarting the server resets the items.
- For production, use a database and add authentication.

---

## License

MIT