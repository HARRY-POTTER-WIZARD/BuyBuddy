```markdown
# 🛒 BuyBuddy

A simple full-stack e-commerce application built with Angular (frontend) and Spring Boot (backend). It allows users to manage products: create, read, update, and delete.

---

## 📚 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- View a list of products
- Add new products
- Edit existing products
- Delete products
- Responsive user interface

---

## 🛠 Technologies Used

- 🔹 Frontend: Angular
- 🔹 Backend: Spring Boot
- 🔹 Database: H2 (in-memory for dev)
- 🔹 Styling: CSS

---

## ⚙️ Installation

### ✅ Prerequisites

- Node.js (v14+)
- Angular CLI
- Java (JDK 11+)
- Maven

---

### 📁 Clone the Repository

```bash
git clone [https://github.com/yourusername/e-commerce-project.git](https://github.com/HARRY-POTTER-WIZARD/BuyBuddy)
cd  BuyBuddy
```

---

## 🔧 Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Build and run the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend will be live at:  
👉 http://localhost:8080

---

## 🌐 Frontend Setup

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

Start the Angular app:

```bash
ng serve
```

The frontend will be live at:  
👉 http://localhost:4200

---

## ▶️ Usage

1. Open your browser.
2. Navigate to http://localhost:4200.
3. Use the UI to add, edit, and delete products.

---

## 🧪 API Endpoints

| Method | Endpoint                | Description                  |
|--------|-------------------------|------------------------------|
| GET    | /api/products           | Get all products             |
| GET    | /api/products/{id}      | Get product by ID            |
| POST   | /api/products           | Create a new product         |
| PUT    | /api/products/{id}      | Update an existing product   |
| DELETE | /api/products/{id}      | Delete a product by ID       |

---
