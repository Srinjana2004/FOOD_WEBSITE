# 🍅 Tomato — Food Delivery Web App

A full-stack food delivery web application where users can browse a menu by category, add items to their cart, apply promo codes, and place orders — built with **React.js**, **Node.js**, **Express.js**

---

## 🏠 Home Page

![Home Page](screenshots/home.png)

> A vibrant hero section with an orange-themed banner, navigation bar with cart & profile icons, and a **"View Menu"** CTA button.

---

## 🍽️ Menu Page

![Menu Page](screenshots/menu.png)

> Browse food by categories — **Salad, Rolls, Deserts, Sandwich, Cake, Pure Veg, Pasta, Noodles** — with a "Top dishes near you" section below.

---

## 🛒 Cart Page

![Cart Page](screenshots/cart.png)

> View all added items with their price, quantity, and total. Apply a **promo code** and see the breakdown of Subtotal, Delivery Fee, and Total before checkout.

---

## 🚀 Features

- 🔑 **User Registration & Login** (with JWT Authentication)
- 🍽️ **Browse Menu** by food category (Salad, Rolls, Pasta, etc.)
- ➕ **Add / Remove Items** from cart
- 🧾 **Cart Summary** with Subtotal, Delivery Fee & Total
- 🏷️ **Promo Code** support
- 💳 **Proceed to Checkout** flow
- 📱 **Responsive Design** across devices
- 🛠️ **Admin Panel** to manage orders and menu items

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | React.js, CSS3          |
| Backend    | Node.js, Express.js     |
| Database   | MongoDB, Mongoose       |
| Auth       | JWT (JSON Web Tokens)   |

---

## 📁 Project Structure

```
tomato/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── public/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tomato.git
cd tomato

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `/backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

### Run the App

```bash
# Start backend (from /backend)
npm run server

# Start frontend (from /frontend)
npm run dev
```

App runs at: `http://localhost:5173`

---

## 📸 Screenshots

| Page | Preview |
|------|---------|
| 🏠 Home | Hero banner with orange theme |
| 🍽️ Menu | Category filter + dish grid |
| 🛒 Cart | Item list + promo code + total |

---

## 📬 Contact

Made with ❤️ by [Your Name](https://github.com/yourusername)

[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat&logo=github)](https://github.com/yourusername/tomato)
