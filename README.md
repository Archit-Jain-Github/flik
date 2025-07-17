# 🧠 Flik – Modern Full-Stack Think Board

**Flik** is a full-featured, full-stack **Think Board** application designed to help you capture, organize, and manage your thoughts with elegance and efficiency. Built using the MERN stack, it offers a clean UI, responsive design, smooth drag interactions, and performance-optimized architecture.

👉 **Live Demo**: [https://flik.architjain.dev/](https://flik.architjain.dev/)

---

## ✨ Key Features

- 🧠 Instantly create and store thoughts with title and content
- ✏️ Edit and update existing entries with ease
- ❌ Delete outdated or irrelevant thoughts
- 🖱️ Intuitive drag interface using **Framer Motion**
- ⚡ High performance via **Upstash Redis caching**
- 🧱 Modular, maintainable code structure
- 💻 Fully responsive and mobile-friendly design

---

## 🛠️ Tech Stack

### 🔷 Frontend
- **React**
- **Tailwind CSS**
- **DaisyUI**
- **Framer Motion** – drag animations
- **Axios**

### 🟢 Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Upstash Redis** – serverless caching

### 🧰 Developer Tools
- **dotenv** – environment configuration
- **nodemon** – backend live-reloading
- **Postman** – API testing

---

## 🧪 API Endpoints

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| GET    | `/api/notes`          | Retrieve all thoughts   |
| POST   | `/api/notes`          | Create a new thought    |
| PUT    | `/api/notes/:id`      | Update an existing thought |
| DELETE | `/api/notes/:id`      | Delete a thought        |

---

## ⚙️ Setup Guide

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 🔸 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in the `backend/` directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
REDIS_URL=your_upstash_redis_url
```

---