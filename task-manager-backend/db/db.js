const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'tasks.db'), (err) => {
  if (err) console.error(err.message);
  else console.log('Connected to SQLite DB.');
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      dueDate TEXT,
      status TEXT,
      createdAt TEXT,
      updatedAt TEXT
    )
  `);
});

module.exports = db;
