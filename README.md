# Scalable REST API with Authentication & Role-Based Access

## Project Overview

This project implements a **secure and scalable REST API** with user authentication, role-based access control, and CRUD operations for tasks.
It also includes a basic frontend UI to interact with the APIs.

The system demonstrates backend best practices including authentication, modular architecture, input validation, and API documentation.

---

## Tech Stack

### Backend

* FastAPI
* SQLAlchemy ORM
* SQLite (can be replaced with PostgreSQL/MySQL)
* JWT Authentication
* Passlib (bcrypt password hashing)

### Frontend

* React.js
* Axios for API communication

### Documentation

* Swagger (auto-generated)
* OpenAPI

---

## Features

### Authentication

* User Registration
* User Login
* Password hashing using bcrypt
* JWT token generation
* Secure protected routes

### Role-Based Access

* User role support
* Admin-only endpoints possible

### Task Management

* Create Task
* View Tasks
* Update Task
* Delete Task

### API Best Practices

* RESTful API design
* API versioning (`/api/v1`)
* Request validation with Pydantic
* Error handling with proper HTTP status codes

---

## Project Structure

backend/
app/
main.py
database.py

models/
user.py
task.py

schemas/
user_schema.py
task_schema.py

routes/
auth_routes.py
task_routes.py

utils/
hashing.py
jwt_handler.py

dependencies/
auth_guard.py

requirements.txt

---

## Installation & Setup

### 1. Clone Repository

git clone https://github.com/YOUR_USERNAME/scalable-api-assignment.git

cd scalable-api-assignment/backend

### 2. Create Virtual Environment

python -m venv venv

source venv/bin/activate

### 3. Install Dependencies

pip install -r requirements.txt

### 4. Run Server

uvicorn app.main:app --reload

Server runs on:

http://127.0.0.1:8000

---

## API Documentation

Swagger UI:

http://127.0.0.1:8000/docs

ReDoc:

http://127.0.0.1:8000/redoc

---

## Authentication Flow

1. Register a user
2. Login to receive a JWT token
3. Include token in API requests

Example header:

Authorization: Bearer <JWT_TOKEN>

---

## Example API Endpoints

### Register

POST /api/v1/auth/register

### Login

POST /api/v1/auth/login

### Tasks

POST /api/v1/tasks
GET /api/v1/tasks
PUT /api/v1/tasks/{id}
DELETE /api/v1/tasks/{id}

---

## Security Practices

* Password hashing using bcrypt
* JWT token authentication
* Input validation with Pydantic
* Protected routes using authentication middleware

---

## Scalability Design

The backend uses a **modular architecture** separating routes, models, schemas, and services to maintain scalability.

Future improvements may include:

* Microservices architecture
* Redis caching
* Docker containerization
* Load balancing
* Database indexing for performance

---

## Author

Anuj Pundora
