# TODO Backend

A simple Express + MongoDB backend for managing TODO items with CRUD operations.

## Features

- Create a todo
- Read all todos
- Update a todo
- Delete a todo

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- CORS

## Project Structure

- `server.js` - Express server entry point
- `config/db.js` - MongoDB connection
- `model/todoModel.js` - Todo schema
- `controller/todoController.js` - Request handlers
- `routes/todoRoutes.js` - API routes

## Setup

1. Install dependencies

   ```bash
   npm install
   ```

2. Create a `.env` file with your MongoDB connection string and port

   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=3000
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

## API Endpoints

### Create Todo

```http
POST /api/todos
```

Request body:

```json
{
  "title": "Learn Express",
  "description": "Build a simple API",
  "completed": false
}
```

### Get All Todos

```http
GET /api/todos
```

### Update Todo

```http
PUT /api/todos/:id
```

Request body example:

```json
{
  "title": "Learn Express",
  "description": "Build a simple API",
  "completed": true
}
```

### Delete Todo

```http
DELETE /api/todos/:id
```

## Example Response

### Create Todo

```json
{
  "message": "Todo created successfully",
  "todo": {
    "_id": "64f7a1d...",
    "title": "Learn Express",
    "description": "Build a simple API",
    "completed": false,
    "createdAt": "2026-05-26T10:00:00.000Z",
    "updatedAt": "2026-05-26T10:00:00.000Z"
  }
}
```

## Notes

- The API currently validates that `title` is required.
- `description` defaults to an empty string.
- `completed` defaults to `false`.
