# Scalable REST API with Authentication & Role-Based Access

A full-stack application demonstrating a **secure and scalable REST API architecture** built with **FastAPI** and a **React frontend**.
The system supports **JWT authentication, role-based access control (Admin/User), and CRUD operations for tasks**, along with an admin dashboard for user management.

This project was built as part of a **Backend Developer Internship assignment**, focusing on backend architecture, API design, security practices, and frontend integration.

---

# 🚀 Features

## Backend (FastAPI)

* User **registration and login** with password hashing (bcrypt)
* **JWT authentication** with secure token validation
* **Role-based access control** (User vs Admin)
* **CRUD APIs for tasks**
* **User-specific task isolation**
* **Admin APIs to manage users and inspect tasks**
* API **versioning (`/api/v1`)**
* Structured **modular architecture**
* **Input validation using Pydantic**
* Built-in **Swagger API documentation**

---

## Frontend (React + Vite)

Simple UI to demonstrate API interaction:

* Home page with **Login / Register**
* **Register as User or Admin**
* Secure **Login with JWT**
* **Protected dashboards**
* User dashboard for **task management**
* Admin dashboard for **user management**
* Error handling and validation messages

---

# 🧱 Tech Stack

## Backend

* **FastAPI**
* **SQLAlchemy**
* **SQLite**
* **Python-JOSE (JWT)**
* **Passlib (bcrypt hashing)**

## Frontend

* **React (Vite)**
* **Axios**
* **React Router**

---

# 📁 Project Structure

```
Ai-scalable-api
│
├── backend
│   ├── app
│   │   ├── routes
│   │   │   ├── auth_routes.py
│   │   │   ├── task_routes.py
│   │   │   └── admin_routes.py
│   │   │
│   │   ├── models
│   │   │   ├── user.py
│   │   │   └── task.py
│   │   │
│   │   ├── schemas
│   │   │   ├── user_schema.py
│   │   │   └── task_schema.py
│   │   │
│   │   ├── dependencies
│   │   │   └── auth_guard.py
│   │   │
│   │   ├── database.py
│   │   └── main.py
│   │
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   │
│   │   ├── components
│   │   │   └── TaskForm.jsx
│   │   │
│   │   ├── api
│   │   │   └── api.js
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🔐 Authentication Flow

1. User registers using `/api/v1/auth/register`
2. Password is securely **hashed using bcrypt**
3. User logs in via `/api/v1/auth/login`
4. Backend returns a **JWT token**
5. Frontend stores token and sends it in:

```
Authorization: Bearer <token>
```

6. Protected routes verify the token before granting access.

---

# 👥 Role-Based Access Control

Two roles exist:

### User

Users can:

* Create tasks
* View their tasks
* Edit tasks
* Delete tasks

Each user's tasks are **isolated using `owner_id`**.

---

### Admin

Admins can:

* View all registered users
* Delete users
* View tasks created by any user

Admin-only endpoints:

```
GET /api/v1/admin/users
DELETE /api/v1/admin/users/{user_id}
GET /api/v1/admin/users/{user_id}/tasks
```

---

# 📦 API Endpoints

## Authentication

```
POST /api/v1/auth/register
POST /api/v1/auth/login
```

---

## Tasks

```
POST   /api/v1/tasks
GET    /api/v1/tasks
PUT    /api/v1/tasks/{task_id}
DELETE /api/v1/tasks/{task_id}
```

---

## Admin

```
GET    /api/v1/admin/users
DELETE /api/v1/admin/users/{user_id}
GET    /api/v1/admin/users/{user_id}/tasks
```

---

# 📄 API Documentation

FastAPI automatically provides interactive documentation:

```
http://127.0.0.1:8000/docs
```

---

# 🗄 Database Schema

## Users

| Field    | Type            |
| -------- | --------------- |
| id       | Integer         |
| email    | String          |
| password | String (hashed) |
| role     | String          |

---

## Tasks

| Field       | Type                |
| ----------- | ------------------- |
| id          | Integer             |
| title       | String              |
| description | String              |
| owner_id    | Foreign Key → Users |

---

# ⚙️ Setup Instructions

## Backend

Navigate to backend folder:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate:

Mac/Linux

```
source venv/bin/activate
```

Install dependencies:

```
pip install -r requirements.txt
```

Run server:

```
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## Frontend

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🧠 Security Practices

* Password hashing using **bcrypt**
* **JWT token authentication**
* **Role-based authorization**
* **Pydantic input validation**
* **Protected routes with dependency guards**
* **CORS configuration**

---

# 📈 Scalability Notes

The backend follows a **modular architecture** separating:

* routes
* schemas
* models
* dependencies
* database logic

This structure enables easy scaling as the application grows.

Future improvements could include:

* **Redis caching**
* **Docker containerization**
* **Load balancing**
* **Microservices architecture**
* **PostgreSQL production database**

---

# 🎯 Evaluation Criteria Addressed

This project demonstrates:

✔ RESTful API design
✔ Secure authentication with JWT
✔ Role-based access control
✔ Proper database relationships
✔ Input validation and error handling
✔ Frontend integration with protected routes
✔ Scalable backend architecture

---

# 👨‍💻 Author

**Anuj Pundora**

Backend Developer | AI & Full Stack Enthusiast
