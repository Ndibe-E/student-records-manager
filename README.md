#  Student Records Manager

A RESTful API built with Node.js, Express, Sequelize, and MySQL for managing student records. Only an admin has access to create, update,  and delete student records. Let us dive in:

---

##  Features

- Admin can:
  - Add new students
  - View all students
  - View a single student
  - Update student details
  - Delete student records

- Students can:
  - View all students
  - View a single student


- Secure admin authentication using JWT
- Sequelize ORM with MySQL
- Input validation and error handling

---

##  Tech Stack

- Node.js
- Express
- Sequelize
- MySQL
- JSON Web Token (JWT)
- dotenv
- Nodemon (for development)

---

## 📁 Folder Structure


student-records-manager/

├── config/   # Configuration
│   ├── databases.js
│   │  
├── controller/   # API Logic
│   ├── studentController.js
│   |
├── docs/    # Documentation
│   ├──  swagger.js
|   |
│   │
├── middleware/  # Middleware
│   ├── authMiddleware.js
│   ├──  validate.js
│   │
├── models/    # Sequelize Model
│   ├──  student.js
│   │
├── routes/    # Express routes 
│   ├── studentRoutes.js
│   │
├── node_modules/
│   │
├── .env.example   # Environment variable template
│   │
├── .gitignore  # Git ignore rules
│   │
├── package.json  # Node.js dependencies and scripts
│   │
├── package-lock.json  # Dependency lock file
│   │
├── README.md # This file (project overview)
│   │
├── server.js   # Entry point
│   │
└── 


---

## ✅ Setup Instructions

### 1. Clone the Repository

```bash
git clone  https://github.com/Ndibe-E/student-records-manager.git







