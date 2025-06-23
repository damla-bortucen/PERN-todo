# PERN-TodoApp

A simple full-stack Todo application built with the PERN stack (PostgreSQL, Express, React, Node.js).

## Features

- Add, edit, and delete todos
- Persistent storage with PostgreSQL
- RESTful API with Express and Node.js
- Modern React frontend

## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/pern-todo.git
   cd pern-todo
   ```

2. **Install server dependencies:**
   ```sh
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```sh
   cd ../client
   npm install
   ```

4. **Set up your PostgreSQL database:**
   - Create a database (e.g., `perntodo`)
   - Run the SQL in `server/database.sql` to create the `todo` table

5. **Configure environment variables:**
   - Create a `.env` file in the `server` directory with your database credentials

6. **Start the backend server:**
   ```sh
   cd ../server
   npm run dev
   ```

7. **Start the frontend:**
   ```sh
   cd ../client
   npm start
   ```

## Credits
This project is based on [PERN Stack Course - Postgres, Express, React, and Node](https://www.youtube.com/watch?v=ldYcgPKEZC8&list=WL&index=2) by [The Stoic Programmers](https://www.youtube.com/@thequacklearner), published on freeCodeCamp.org.