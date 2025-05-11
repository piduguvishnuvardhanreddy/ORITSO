📄 README.md
markdown
Copy
Edit
# 📝 Task Management App

A full-stack Task Management application built with:

- **Frontend**: React.js + Context API + Pure CSS (Flexbox + Media Queries)
- **Backend**: Node.js + Express + SQLite3
- **Persistence**: LocalStorage (Frontend), SQLite DB (Backend)

---

## 📦 Folder Structure

task-manager/
│
├── backend/ # Node + Express + SQLite3
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── db/
│ ├── server.js
│ └── package.json
│
├── frontend/ # React + Context + Pure CSS
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Nav/
│ │ │ ├── UserDetails/
│ │ │ ├── TaskForm/
│ │ │ └── TaskList/
│ │ ├── context/
│ │ │ ├── TaskContext.js
│ │ │ └── TaskProvider.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── App.css
│ └── package.json
│
└── README.md

yaml
Copy
Edit

---

## 🚀 Features

- Add, update, and delete tasks.
- User details saved in `localStorage`.
- Tasks persist across page reloads using `localStorage`.
- Responsive layout using only CSS media queries and flexbox.
- Organized component-based architecture.

---

## 🛠️ Installation & Setup

### 1️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
Ensure server.js is running on your preferred port (default: 5000).

SQLite DB is stored locally in /db/tasks.db.

2️⃣ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
Opens the React app at http://localhost:3000.

🔄 Frontend Context API Logic
✅ TaskProvider
Provides tasks, addTask, updateTask, deleteTask

Saves data to localStorage

✅ TaskContext
js
Copy
Edit
// src/context/TaskContext.js
import { createContext } from 'react';
const TaskContext = createContext();
export default TaskContext;
📸 UI Preview (Optional - Add Screenshot)
You can include screenshots of:

🧑 User input form

✅ Task form with task list

📱 Mobile layout

⚠️ Common Errors & Fixes
Error Message	Cause	Fix
Element type is invalid: got undefined	TaskProvider or TaskContext not exported/imported properly	Export TaskContext in TaskContext.js, and TaskProvider in TaskProvider.js
Tasks not persisting	localStorage was not set up or effect hook missing	Use useEffect(() => { ... }, [tasks]) and JSON.stringify/parse correctly

✍️ Author
Developed by Your Name (replace with actual name or GitHub)

📃 License
This project is open-source and available under the MIT License.

yaml
Copy
Edit

---

Let me know if you'd like me to generate the LICENSE file or a live demo deployment guide.

















