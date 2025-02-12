# **WaysAhead Global - MERN Stack Website**  

## **Project Overview**  
This is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application for **WaysAhead Global**, showcasing AI-driven services, case studies, job listings, and chatbot integration. The project includes:  

✅ **Frontend:** React.js (with Material-UI)  
✅ **Backend:** Node.js, Express.js  
✅ **Database:** MongoDB (Atlas)  
✅ **State Management:** Redux Toolkit  
✅ **Chatbot:** OpenAI API integration  
✅ **SEO Optimization:** `react-helmet-async`  
✅ **Dark Mode Toggle**  
✅ **Deployment:** Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas  

---

## **Table of Contents**  
1. [Features](#features)  
2. [Installation Guide](#installation-guide)  
3. [Project Structure](#project-structure)  
4. [Running the Project](#running-the-project)  
5. [API Documentation](#api-documentation)  
6. [Deployment Guide](#deployment-guide)  
7. [Environment Variables](#environment-variables)  
8. [Contributing](#contributing)  

---

## **1. Features**  
- 🚀 **Dynamic UI with Material-UI**  
- 🌙 **Dark Mode Toggle (Redux)**  
- 🔍 **SEO Optimization for Meta Tags**  
- 💬 **Chatbot with OpenAI API Integration**  
- 🔄 **Live Job Listings (MongoDB Atlas)**  
- 📩 **Contact Form with Email Notifications**  
- 🔐 **JWT Authentication for Secure Login**  

---

## **2. Installation Guide**  

### **Prerequisites**  
Ensure you have the following installed:  
- [Node.js (LTS)](https://nodejs.org/en/download/)  
- [MongoDB Atlas](https://www.mongodb.com/atlas)  
- [Git](https://git-scm.com/)  

### **Clone the Repository**  
```sh
git clone https://github.com/your-username/waysahead-global.git
cd waysahead-global
```

## **Project Overview**

waysahead-global/
│── frontend/       # React.js (Material UI, Redux, SEO)
│── backend/        # Express.js (Node.js, MongoDB, JWT)
│── README.md       # Documentation


## **Running the Project**

```sh
cd backend
npm install
```

Create a .env file in backend/ and add:
```sh
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
OPENAI_API_KEY=your-openai-api-key
```
Then start backend server:
```sh
npm run dev
```

## **Frontend Setup**
```sh
cd frontend
npm install
```

API Documentation
This project uses Swagger/Postman for API documentation.

Example Endpoints:
Method	Endpoint	Description
POST	/api/auth/login	User login (JWT authentication)
POST	/api/contact	Send a contact form message
GET	/api/jobs	Fetch job listings from MongoDB
To test APIs:

Run the backend (npm run dev).
Use Postman or Swagger UI to test endpoints.

## **Deployment Guide**

Frontend Deployment (Vercel)
Build the frontend:

```sh
npm run build
```
Deploy to Vercel:
```sh
vercel
```
OR deploy manually by uploading /build to Netlify.
