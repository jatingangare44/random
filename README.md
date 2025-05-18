
# 🎲 Random Game Generator

A simple full-stack web app that suggests a random game to play using the [API Ninjas Games API](https://api-ninjas.com/api/games). The app features a Node.js Express backend and a static frontend deployed on Netlify.

---

## 🚀 Live Demo

- 🔗 Frontend (Netlify): [https://randomness.netlify.app](https://your-site-name.netlify.app)
- 🔗 Backend (Render): [https://random-xw53.onrender.com](https://random-xw53.onrender.com)

---

## 🧩 Features

- 🎮 Get a random game suggestion with a button click
- 🔄 Backend proxy server to securely call external APIs (API Ninjas)
- 🌐 Fully deployed frontend and backend

---

## 📁 Project Structure

```
random-content-generator/
│
|                 # HTML/CSS/JS files (deployed to Netlify)
│ index.html
│ style.css
│ script.js
│
├── server.js                  # Express backend (deployed to Render)
├── .env                       # API key (not committed)
├── package.json
└── README.md
```

---

## ⚙️ Backend Setup (Express + Render)

### 🔐 Environment Variables

Create a `.env` file:
```env
API_NINJAS_KEY=your_api_ninjas_key_here
```

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Run Locally

```bash
node server.js
```

Your backend runs on `http://localhost:3000`.

---

## 🌍 Frontend Setup (Static + Netlify)

### 🛠️ Update API URL

In `script.js`, update the fetch URL:
```js
fetch("https://random-xw53.onrender.com/api/game")
```

### 🏗️ Build (if using a framework)

For React/Vite/Parcel-based projects:
```bash
npm run build
```

### 🚢 Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir=build   # or . if it's plain HTML/CSS/JS
netlify deploy --dir=build --prod
```

---

## 🔐 API Used

- **API**: [Games API – API Ninjas](https://api-ninjas.com/api/games)
- **Key**: Stored in `.env` and accessed using `process.env.API_NINJAS_KEY`

---

## 💡 How it Works

1. The frontend makes a request to `/api/game`.
2. The backend (`server.js`) calls the external API using the API key.
3. The backend responds with a random game JSON.
4. The frontend displays it.

---

## 🧑‍💻 Author

- **Name**: Jatin
- **GitHub**: [github.com/YOUR_USERNAME](https://github.com/YOUR_USERNAME)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
