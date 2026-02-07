# Items API – Express

A RESTful API built with **Node.js** and **Express** to manage items using full CRUD operations.  
This project focuses on clean architecture, validation, and middleware implementation.

---

## 🚀 Features

- CRUD operations for items
- RESTful API design
- Input validation
- Custom middleware
- Centralized error handling
- File-based data storage (JSON)
- Clean and scalable project structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JavaScript
- File System (fs)
- Nodemon

---

## 📁 Project Structure

Items-API-EXPRESS/
│── app.js
│
├── routes/
│ └── itemsRoutes.js
│
├── controllers/
│ └── itemsController.js
│
├── middlewares/
│ ├── logger.js
│ ├── validate.js
│ └── errorHandler.js
│
└── data/
└── items.json


---

## 📌 API Endpoints

### Get all items
GET /items


### Get item by ID
GET /items/:id


### Create a new item
POST /items


### Update an item
PUT /items/:id


### Delete an item
DELETE /items/:id


---

## ▶️ How to Run the Project

### 1️⃣ Clone the repository
```bash
git clone https://github.com/USERNAME/Items-API-EXPRESS.git
2️⃣ Install dependencies
npm install
3️⃣ Run the server
npm run dev
Server will run on:

http://localhost:3000
🧪 Testing
You can test the API using:

Postman

Thunder Client

PowerShell

📈 Future Improvements
Replace file-based storage with MongoDB

Add authentication and authorization

Add pagination and filtering

Add unit tests

👨‍💻 Author
Mohammed Waleed
Backend Developer (Node.js)

⭐ Support
If you like this project, don’t forget to give it a ⭐ on GitHub!
