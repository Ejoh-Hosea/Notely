# 📝 Notely

Notely is a full-stack **MERN** application built for seamless note management. It features a modern, responsive UI, a modular backend architecture, and production-ready security layers such as **API rate limiting**.

---

## 🚀 Live Demo

Check out the application in action:  
👉 [Notely Live](https://notely-2xnc.onrender.com/)

---

## ✨ Features

- **Full CRUD:** Create, read, update, and delete notes with real-time feedback
- **Modern UI:** Built with React 18, Tailwind CSS, and DaisyUI (dark-themed, clean design)
- **API Security:** Rate limiting powered by Upstash Redis to prevent API abuse
- **Production Optimized:** Single-command build where the backend serves the frontend build
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices

---

## Tech Stack

### Frontend

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS & DaisyUI
- **Routing:** React Router DOM
- **State / Fetching:** Axios
- **Notifications:** React Hot Toast

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Rate Limiting:** Upstash Redis
- **Environment Config:** Dotenv

## Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/Ejoh-Hosea/Notely.git
cd Notely
```

### Environment Variables

Create a `.env` file inside the **backend** directory:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
NODE_ENV=development
```

### Install Dependencies & Build

From the root directory:

```bash
npm run build
```

### 4️⃣ Start the Application

```bash
# Production mode
npm start

# Backend development mode (requires nodemon)
cd backend && npm run dev
```

---

## Security & Performance

Notely uses **rate-limiting middleware** via `@upstash/ratelimit` to ensure fair API usage.

- Requests are tracked per IP address and throttled when limits are exceeded.
- Protects against spam, brute-force attacks, and resource overuse.

This makes the application more **stable, reliable, and production-ready**.

---

## Contributing

Contributions are welcome! Feel free to fork, submit PRs, or open issues.

Steps to contribute:

1. Fork the Project
2. Create your Feature Branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes
   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push to the Branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License

Distributed under the **ISC License**.

---

## 👤 Author

**Hosea**

- GitHub: [@Ejoh-Hosea](https://github.com/Ejoh-Hosea)
- Email: ejohhoseamwongwe@gmail.com
- Portfolio: [https://ejoh-hosea.netlify.app/](https://ejoh-hosea.netlify.app/)
