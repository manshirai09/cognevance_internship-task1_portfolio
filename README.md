# 🌐 Responsive Portfolio Website (Full Stack Project)

A fully responsive **personal portfolio website** built as part of an internship task.
This project demonstrates modern frontend design, backend API integration, and database connectivity for storing contact form submissions.

---

## 📌 Live Demo

🔗 **Frontend Live:** https://portfolio-frontend-peach-psi.vercel.app
🔗 **Backend API:** https://portfolio-backend-u8ev.onrender.com
🔗 **GitHub Repository:** https://github.com/manshirai09/cognevance_portfolioWebsite

---

## 📖 Project Overview

This project is a **full-stack responsive portfolio website** that allows users to:

* View personal profile information
* Explore skills and projects
* Contact via a form
* Submit messages stored in a backend database

It is designed to be **fully responsive**, ensuring smooth experience across mobile, tablet, and desktop devices.

---

## ✨ Features

### 🎨 Frontend Features

* Fully responsive UI design
* Smooth scrolling navigation
* Animated sections (About, Skills, Projects, Contact)
* Mobile-friendly hamburger menu
* Clean and modern UI design

### ⚙️ Backend Features

* REST API built using Node.js + Express
* Contact form API endpoint (`/api/contact`)
* Data validation before storing messages
* Secure environment variable handling using `.env`

### 🗄️ Database Features

* Stores contact form messages
* MongoDB schema-based structure
* Timestamped user submissions

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3 (Flexbox, Grid, Media Queries)
* JavaScript (ES6)
* React (Optional if used)

### Backend

* Node.js
* Express.js
* CORS
* Dotenv

### Database

* MongoDB (Mongoose ORM)

### Deployment

* Frontend: Vercel
* Backend: Render 
* Database: MongoDB Atlas

---

## 📁 Project Structure
portfolio-project/
│
├── frontend/ (React App)
│   ├── public/
│   │    └── assets/
│   │
│   ├── src/
│   │   ├── components/
│   │   │    ├── Navbar.jsx
│   │   │    ├── Hero.jsx
│   │   │    ├── About.jsx
│   │   │    ├── Skills.jsx
│   │   │    ├── Projects.jsx
│   │   │    └── Contact.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── assets/
│   │
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── server.js
│   │
│   ├── models/
│   │    └── Contact.js
│   │
│   ├── routes/
│   │    └── contactRoutes.js
│   │
│   │
│   ├── .env
│   ├── package.json
│   └── .gitignore
│
├── README.md


## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/portfolio-project.git
cd portfolio-project
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

If using plain HTML:

* Open `index.html` in browser

If using React:

```bash
cd frontend
npm install
npm start
```

---

## 📬 API Endpoints

### Contact Form API

**POST** `/api/contact`

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I like your portfolio!"
}
```

Response:

```json
{
  "success": true,
  "message": "Message saved successfully"
}
```

---

## 🗄️ Database Schema (MongoDB)

```js
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
```

---

## 🚀 Deployment

### Frontend Deployment (Vercel )

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy frontend folder

### Backend Deployment (Render)

1. Upload backend to GitHub
2. Connect to Render
3. Add environment variables
4. Deploy server

---

## 📸 Screenshots

### Home Page

<img width="912" height="903" alt="image" src="https://github.com/user-attachments/assets/f0c9315f-57f0-4e48-a4a8-a9be5e1f6daf" />

### Projects Section

<img width="903" height="900" alt="image" src="https://github.com/user-attachments/assets/0455f499-821e-4d7b-9222-40cdfa7f6e18" />


### Contact Form

<img width="871" height="653" alt="image" src="https://github.com/user-attachments/assets/2ca82cb4-a9fc-479e-8289-f7af628267b0" />


---

## 🧠 What I Learned

* Building responsive UI layouts
* Creating REST APIs using Node.js & Express
* Connecting frontend with backend
* Working with MongoDB database
* Deploying full-stack applications
* Git & GitHub workflow

---

## 👨‍💻 Author

**Name:** Manshi Rai
**GitHub:** https://github.com/manshirai09
**Portfolio:** https://portfolio-frontend-peach-psi.vercel.app
**Email:** er.manshirai@gmail.com

