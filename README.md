# 🎬 MovieMate – React TMDB Movie Explorer

**MovieMate** is my first React project. It fetches **popular movies** from the TMDB (The Movie Database) API and allows users to **add or remove movies** from a personalized **favorites list**. This project helped me learn how to work with React components, hooks, and external APIs.

---

## 🚀 Features

- 🔥 Fetches real-time **popular movies** using TMDB API
- ❤️ Users can **add/remove movies** to/from favorites
- ⚛️ Built with **React Hooks** (`useState`, `useEffect`)
- 💻 Responsive user interface
- 📦 Clean and modular component structure

---

## 🛠 Tech Stack

- **React.js** (with Hooks)
- **TMDB API** – movie data
- **CSS / TailwindCSS** – styling (depending on what you used)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/aqib-9/MovieMate.git
cd MovieMate
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up your TMDB API key
Sign up at TMDB and get a free API key.

Create a .env file in the root directory:

env
Copy
Edit
API_KEY=your_api_key_here
4. Run the app locally
bash
Copy
Edit
npm start
The app will be available at http://localhost:3000.

🗂 Folder Structure
pgsql
Copy
Edit
MovieMate/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieList.jsx
│   │   ├── MovieCard.jsx
│   │   └── Favorites.jsx
│   ├── App.js
│   ├── api.js
│   └── index.js
├── .env
├── README.md
└── package.json
📌 Future Improvements
🔍 Add search functionality

📄 Movie detail modal

💾 Persist favorites using localStorage

📂 Add filtering by genre/category

🙋‍♂️ Author
Aqib Ali
🔗 LinkedIn
💻 GitHub

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

### ✅ Next Steps:
- Save this content to a `README.md` file in your project root.
- Run:

```bash
git add README.md
git commit -m "Add full project README"
git push
